import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { Suspense, lazy, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import { Layout } from "./components/Layout/Layout";
import RestrictedRoute from "./Router/RestrictedRoute";
import PrivateRoute from "./Router/PrivateRouter";
import { selectIsRefreshing } from "./redux/auth/selectors.js";

import { refreshUser } from "./redux/auth/operations.js";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() =>
  import("../src/pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("../src/pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
  import("../src/pages/ContactsPage/ContactsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../src/pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
