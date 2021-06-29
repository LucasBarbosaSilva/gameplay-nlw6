import React from 'react';
import { ScrollView } from 'react-native';
import { catoegories } from '../../utils/categories';
import { Category } from '../Category/index';

import { styles } from './styles';

interface Props {
  categorySlected: string,
  setCategory: (categoryId: string) => (void)
}

export function CategorySelector({ categorySlected, setCategory }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 40,

      }}
      style={styles.container}
    >
      {catoegories.map(category => {
        return (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySlected}
            onPress={() => setCategory(category.id)}
          />
        )
      })}
    </ScrollView>
  )
}