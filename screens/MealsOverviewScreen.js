import { View,FlatList,StyleSheet } from 'react-native';
import MealItem from '../screens/MealItem';

import {MEALS} from '../data/dummy-data';

function MealsOverviewScreen ({ route }) {
  
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  function renderMealItem(itemData) {
   const item = itemData.item;
   
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      dyration: item.duration,
    };
    return
     <MealItem {...mealItemProps} />
  }

    return(
    <View style={styles.container}>
       <FlatList 
       data={displayMeals} 
       keyExtractor={(item) => item.id}
        renderItem={renderMealItem} />
    </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16,
    }
});