import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { 
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
 } from "react-native-heroicons/outline";

 import Categories from '../components/Categories.js';
 import FeaturedRow from '../components/FeaturedRow.js';

 import { client } from "../sanity.js";


const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories ] = useState(["Loading!"]);

  // as soon as screen mounts, do something
  useLayoutEffect(() => {
    //allows me to modify default settings
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const query = '*[]';

    client
    .fetch(query)
    .then((data) => setFeaturedCategories(data)
    );
  }, [])

  console.log(featuredCategories);
  

  /* *[_type == "featured"] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }` */
  
  return (
    <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image 
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>
        
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4" >
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
          </View>

          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView className="bg-gray-100">
            {/* Categories */}
            <Categories />

            {/* Featured Rows */}
            <FeaturedRow 
              
              title="Featured"
              description="Paid placement from our partners"
            />
            <FeaturedRow 
              id="12332345"
              title="Tasty Discounts"
              description="Everyone has been enjoying these juice discounts!"
            />
            <FeaturedRow 
              id="12356"
              title="Offers Near You!"
              description="Why not support your local restaurant tonight?!"
            />

            
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;