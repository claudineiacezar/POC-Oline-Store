import React, { useState } from "react";
import NavBar from "../../components/navBar";
import TabBar from "../../components/tabBar";
export const HomeContainer = () => {
  const [state, setState] = useState({
    tabBarState: [
      {
        id: 0,
        value: "Entrega",
        image:
          "https://findicons.com/files/icons/772/token_light/256/e_mail.png",
        style: "li-img-header"
      },
      {
        id: 1,
        value: "Pagamento",
        image:
          "https://e7.pngegg.com/pngimages/613/876/png-clipart-debit-card-product-brand-credit-card-id-cards-blue-chip.png",
        style: "li-img-header-pgmt-revisao"
      },
      {
        id: 2,
        value: "Revisão",
        image:
          "https://d1u7j79bg1ays7.cloudfront.net/blog/wp-content/uploads/2013/06/icon-check.png",
        style: "li-img-header-revisao"
      }
    ]
  });
  return (
    <div>
      <NavBar />
      <TabBar tabBarState={state.tabBarState} />
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
