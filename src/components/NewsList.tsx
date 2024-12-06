import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const NewsList = ({ article }: { article: any }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: article.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{article.title}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {article.description}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 0.5, // Added border
        borderColor: "#ccc", // Light grey color
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    content: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 4,
        color: "#333", // Slightly darker text color
    },
    description: {
        color: "#666", // Softer grey for description
        fontSize: 14,
        lineHeight: 20, // Improved readability
    },
});

export default NewsList;
