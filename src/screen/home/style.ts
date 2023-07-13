import { StyleSheet } from "react-native";
import { fonts, metrics } from "../../theme";

export const styles = StyleSheet.create({
    title:{
        ...fonts.fontStyle.p1LSBText,
        ...metrics.paddings.pB10
    }
})