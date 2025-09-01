import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/** 
 * Header
     - Logo
     - Nav Items 
        - Home
        - About
        - Cart
*  Body
   - Search
   - Restaurant Container
       - RestaurantCard
   
   Footer
     - copyright
     - terms and policy
     - social media links
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://i.pinimg.com/736x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg"
        />
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const style = {
  backgroundColor: "#f0f0f0",
};

const resData = {
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "101582",
        name: "Behrouz Biryani",
        cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
        locality: "Shivam Plaza",
        areaName: "Delta I",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Beverages",
          "Desserts",
        ],
        avgRating: 4.1,
        parentId: "1803",
        avgRatingString: "4.1",
        totalRatingsString: "2.6K+",
        sla: {
          deliveryTime: 56,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "55-65 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-09-02 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "newg.png",
                    description: "Gourmet",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=101582&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
};
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={style}>
      {/* <img className="res-logo" alt="res-logo" src={resData.src} /> */}
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.costForTwo / 100}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resData={resData} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
root.render(<AppLayout />);
