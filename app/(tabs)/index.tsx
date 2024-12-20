import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import NewsList from "../../src/components/NewsList";
import { fetchNews } from "../../src/api/news";

const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState("");

    const loadNews = async () => {
        const fetchedArticles = await fetchNews(query);
        setArticles(fetchedArticles);
    };

    useEffect(() => {
        loadNews();
    }, [query]);

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#555" style={styles.icon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search articles..."
                    placeholderTextColor="#777"
                    value={query}
                    onChangeText={setQuery}
                />
            </View>
            {/* News List */}
            <FlatList
                data={articles}
                renderItem={({ item }) => <NewsList article={item} />}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={<Text>No articles found</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff", 
        borderRadius: 8,
        borderWidth: 0.5, 
        borderColor: "#ccc", 
        paddingHorizontal: 10,
        marginBottom: 16,
        height: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
    },
    icon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#555", 
    },
});

export default HomeScreen;
