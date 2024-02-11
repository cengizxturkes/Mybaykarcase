import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const getWidthPercentage = (percentage: number) => {
    const value = width * percentage
    return Math.round(value);
}

export const getHeightPercentage = (percentage: number) => {
    const value = height * percentage
    return Math.round(value);
}