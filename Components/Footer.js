import { View, Dimensions } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const { height, width } = Dimensions.get("window");

export default function WavyFooter({ customstyles2 }) {
  return (
    <View style={customstyles2}>
      <View
        style={{
          backgroundColor: "#2887e0",
          top: width / 0.5,
          height: height / 7.1,
        }}
      >
        <Svg
          height={height / 6.8}
          width={width / 0.99}
          viewBox="0 0 1440 320"
          style={{ position: "absolute", bottom: width / 4.4 }}
        >
          <Path
            fill="#2887e0"
            d="M0,160L30,176C60,192,120,224,180,240C240,256,300,256,360,250.7C420,245,480,235,540,229.3C600,224,660,224,720,186.7C780,149,840,75,900,90.7C960,107,1020,213,1080,250.7C1140,288,1200,256,1260,218.7C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </Svg>
      </View>
    </View>
  );
}
