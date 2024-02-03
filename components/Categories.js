import { View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView 
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 1"/>
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 2" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      
    </ScrollView>
  )
}

export default Categories;