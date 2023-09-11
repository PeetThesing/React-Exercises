import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const initialLights = [
  {
    id: 1,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Porch",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  // const [isOn, setIsOn] = useState(false);

  console.log("insanity check");

  function howManyLightsOn() {
    let count = 0;
    lights.map((light) => {
      light.isOn ? count++ : null;
    });
    return count;
  }

  function handleToggle(lightsId) {
    setLights(
      lights.map((light) => {
        if (light.id === lightsId) {
          return {
            ...light,
            isOn: !light.isOn,
          };
        } else {
          return light;
        }
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        howManyLightsOn={howManyLightsOn}
      />
    </Layout>
  );
}

// const [isOn, setIsOn] = useState(false);

// function handleToggle() {
//   setIsOn((isOn) => !isOn);
