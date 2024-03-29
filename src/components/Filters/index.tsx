import React from 'react';
import { styles } from './style';
import { FlatList } from 'react-native';
import { Filter } from '@/components/Filter';
import { FiltersProps } from './filters';

export function Filters({filters, filter, onChange}: FiltersProps) {

  return <FlatList 
  data={filters} 
  keyExtractor={items => items}
  renderItem={({ item }) => (
    <Filter 
        filter={item} 
        selected={ item === filter} 
        onPress={() => onChange(item)}
    />
  )}
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.list}
  contentContainerStyle={styles.content}
  />
}