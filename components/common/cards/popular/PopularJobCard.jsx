import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PopularJobCard = ( { item, selectedPopularJobs }) => {
  return (
    <TouchableOpacity style={styles.container(selectedPopularJobs, item)}>
      <View style={styles.infoContainer}>
      <Image style={styles.image} source={item.image}/>
      <View style={styles.descriptionsContainer}>
        <View style={styles.amount}>
        <Text style={styles.jobName(selectedPopularJobs, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.companyName} numberOfLines={1}>{item.companyName}</Text>
        </View>
        <View style={styles.details}>
        <Text style={styles.prize} numberOfLines={1}>{item.prize}</Text>
        <Text style={styles.location} numberOfLines={1}>{item.job_country}</Text>
        </View>
      </View>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard


const styles = StyleSheet.create({
  container: (selectedPopularJobs, item) => ({
    backgroundColor: selectedPopularJobs === item.popularjobs ? '#FFFFFF' : '#FFFFFF',
    padding: 10,
    marginTop: 30,
    borderRadius: 15,
    width: '95%',
    height: 74,
    alignItems: 'left',
    justifyContent: 'center',
    
  }),
  amount: {
    width: 110,
    flexDirection: 'column',
    marginBottom: 5,
    rowGap: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    columnGap: 12,
  },
  details: {
    width: 110,
    flexDirection: 'column',
    rowGap: 10,
  },
  jobName: (selectedPopularJobs, item) => ({
    fontSize: 14,
    fontWeight: selectedPopularJobs === item.popularjobs ? 'bold' : 'normal',
    color: selectedPopularJobs === item.popularjobs? '#0D0D26' : '#0D0D26',
  }),
  companyName: {
    fontSize: 13,
    color: '#0D0D26',
  },
  prize: {
    fontSize: 12,
    color: '#0D0D26',
  },
  location: {
    fontSize: 13,
    color: '#0D0D26',
  },
  image: {
    height: 43,
    width: 41.26,
    marginTop: 8
  },
  descriptionsContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

