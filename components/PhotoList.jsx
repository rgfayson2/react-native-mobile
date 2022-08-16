import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PhotoCard from "./PhotoCard";

const bsPhotos = [
    {description: 'Selfie with Mom'},
    {description: 'Photo of Breakfast'},
    {description: 'Airplane wing in sky'},
    {description: 'My nails painted'},
    {description: 'My legs at the beach'},
    {description: 'Latte art with biscuit'},
]

function PhotoList() {
    return (
        <ScrollView style={styles.photoList}>
            {bsPhotos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    photoList: {
       flex: 1,
       backgroundColor: '#e8e8e8' 
    }
})

export default PhotoList;