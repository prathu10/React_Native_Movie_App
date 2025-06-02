import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View} from 'react-native'
import {images} from "@/constants/images";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";

import MovieCard from "@/components/MovieCard";
import {icons} from "@/assets/icons";
import SearchBar from "@/components/SearchBar";
import {useState} from "react";



const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');


    const {data: movies, loading, error } = useFetch(() => fetchMovies( {query: ''}), )


   


    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover" />
            
            <FlatList data={movies} renderItem={({ item }) => <MovieCard {...item}/>}
                      keyExtractor={(item) => item.id.toString()}
                      className="px-5"
                      numColumns={3}
                      columnWrapperStyle={{
                          justifyContent: 'center',
                          gap: 16,
                          marginVertical: 16
                      }}

                      contentContainerStyle={{paddingBottom: 100}}
                      ListHeaderComponent={
                        <>
                            <View className="w-full flex-row justify-center items-center mt-20 ">
                                <Image source={icons.logo} className="w-12 h-10" />

                            </View>

                            <View className="my-5">
                            <SearchBar placeholder="Search for movies, TV shows and more" />
                            </View>r

                            {loading && (
                                <ActivityIndicator size="large" color="#0000ff" className="my-3" />
                                )}

                            {error && (
                                <Text className="text-red-500 px-5 my-3">
                                    Error: {error.message}

                                </Text>
                            )}

                            {!loading && !error && 'SEARCH QUERY'.trim() && movies?.length > 0 && (
                                <Text className="text-xl text-white font-bold">
                                    Search Results for {' '}
                                    <Text className="text-accent">SEARCH QUERY</Text>

                                </Text>

                            )}
                        </>

                      }

            />

        </View>
    )
}
export default Search

