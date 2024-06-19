import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import FeaturedJobCard from '../../common/cards/featured/FeaturedJobCard';


const DATA = [
    {
      job_title: 'Software Engineer',
      companyName: 'Facebook',
      prize: '$180,000',
      job_country: 'Accra, Ghana',
      image: require('../../icons/facebookoption.png'),
      
    },
    {
      job_title: 'Data Analyst',
      companyName: 'Google',
      prize: '$250,000',
      job_country: 'Lagos, Nigeria',
      image: require('../../icons/googleoption.png'),
      
    },
    {
      job_title: 'Accounting',
      companyName: 'Spotify',
      prize: '$150,000',
      job_country: 'New Delhi, India',
      image: require('../../icons/spotify.png'),
      
    },
    {
      job_title: 'Product Manager',
      companyName: 'Apple',
      prize: '$200,000',
      job_country: 'London, UK',
      image: require('../../icons/appleoption.png'),
      
    },
    {
      job_title: 'Customer Service',
      companyName: 'Amazon',
      prize: '$220,000',
      job_country: 'Paris, France',
      image: require('../../icons/amazon.png'),
      
    },
    {
      job_title: 'IT Consulting',
      companyName: 'Samsung',
      prize: '$130,000',
      job_country: 'Seoul, South Korea',
      image: require('../../icons/samsung.png'),
      
    },
    {
      job_title: 'Administrative Assistant',
      companyName: 'Microsoft',
      prize: '$250,000',
      job_country: 'Carlifornia, USA',
      image: require('../../icons/microsoft.png')
      
    },
    {
      job_title: 'Sales Consultant',
      companyName: 'Adidas',
      prize: '$180,000',
      job_country: 'Berlin, Germany',
      image: require('../../icons/adidas.png')
      
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const FeaturedJobs = () => {
  return (
   <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.headerTitle}>Featured Jobs</Text>
    <TouchableOpacity>
    <Text style={styles.headerBtn}>See all</Text>
    </TouchableOpacity>
    </View>

    <View style={styles.featuredContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => <FeaturedJobCard item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contentContainerStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
   </View>
  )
}

export default FeaturedJobs



const styles = StyleSheet.create({
    container: {
       width: '100%',
       marginTop: 24,
       margin: 20,  
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 10, 
        padding: 10,
        marginLeft: -12,
    },
    headerTitle: {
        fontSize: 16,
        color: '#0D0D26'
    },
    headerBtn: {
        fontSize: 14,
        color: '#95969D',
        paddingRight: 25,
        }
})