import React from "react";
import NavBar from "../../components/navBar";
export const HomeContainer = () => {
  return (
    <div>
      <NavBar />
      <main class="container m-2">
        <div class="bg-light p-5 rounded">
          <h1>Home Title</h1>
          <p class="lead">
            This example is a quick exercise to illustrate how the top-aligned
            navbar works. As you scroll, this navbar remains in its original
            position and moves with the rest of the page.
          </p>
          <a
            class="btn btn-lg btn-primary"
            href="/docs/5.1/components/navbar/"
            role="button"
          >
            View navbar docs »
          </a>
        </div>
      </main>
    </div>
  );
};