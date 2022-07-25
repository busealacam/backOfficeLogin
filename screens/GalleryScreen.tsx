import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Gallery } from "../src/cameraRool/Gallery";
// import Gallery from "../src/cameraRool/Gallery";

export const GalleryScreen = () => {
    return (
        <View>
            <ScrollView>
                <View>
                    <Text>Gallery</Text>
                    <Gallery
                        navigation={""}
                    />
                </View>
            </ScrollView>
        </View>
    )
}