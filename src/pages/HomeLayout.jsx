import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
}

export default HomeLayout;
