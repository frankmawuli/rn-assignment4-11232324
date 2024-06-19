import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';


const DATA = [
    { id: '1', job_title: 'Jr Executive', prize: '$96,000/y', companyName: 'Burger King', job_country: 'Los Angeles, US', image: require('../../icons/burger-king-4 1.png')},
    { id: '2', job_title: 'Product Manager', prize: '$84,000/y', companyName: 'Beats', job_country: 'Florida, US', image: require('../../icons/image 8.png')},
    { id: '3', job_title: 'Product Manager', prize: '$86,000/y', companyName: 'Facebook', job_country: 'Florida, US', image: require('../../icons/Facebook.png')},
    { id: '4', job_title: 'Public Relations', prize: '$100,000/y', companyName: 'Nike', job_country: 'Detroit, US', image: require('../../icons/nike.png')},
    { id: '5', job_title: 'Jr Executive', prize: '$75,000/y', companyName: 'Burger King', job_country: 'Miami, US', image: require('../../icons/burger-king-4 1.png')},
    { id: '6', job_title: 'Senior Officer', prize: '$84,000/y', companyName: 'Nvidia', job_country: 'New York, US', image: require('../../icons/nvidia.png')},
    { id: '7', job_title: 'Retailer', prize: '$98,000/y', companyName: 'Volkswagen', job_country: 'Las Vegas, US', image: require('../../icons/volswagen.png')},
    { id: '8', job_title: 'Customer Service', prize: '$100,000/y', companyName: 'Starbucks', job_country: 'California, US', image: require('../../icons/starbucks.png')},
    
  ];

const PopularJobs = () => {
    const [selectedPopularJobs, setSelectedPopularJobs] = React.useState(null);

  return (
   <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.headerTitle}>Popular Jobs</Text>
    <TouchableOpacity>
    <Text style={styles.headerBtn}>See all</Text>
    </TouchableOpacity>
    </View>

    <ScrollView contentContainerStyle={styles.contentContainer}>
        {DATA.map((item) => (
          <PopularJobCard
            key={item.id}
            item={item}
            selectedPopularJobs={selectedPopularJobs}
          />
        ))}
      </ScrollView>
   </View>
  )
}

export default PopularJobs



const styles = StyleSheet.create({
    container: {
       width: '100%',
       marginTop: 24,
       marginLeft: 10,
       marginRight: 15, 
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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