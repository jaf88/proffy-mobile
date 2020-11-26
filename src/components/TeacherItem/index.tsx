import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { RectButton } from 'react-native-gesture-handler';

function TeacherList() {
  return(
    <View style={styles.container}> 
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: 'https://github.com/jaf88.png'}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Joaquim Alves</Text>
          <Text style={styles.subject}>Web2</Text>
        </View>
      </View>
      
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing
        {'\n'}{'\n'}
        elit. Iure nostrum amet labore ducimus illum minima
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton,styles.favorited]}>
            {/*<Image source={heartOutLineIcon} />*/}
            <Image source={unFavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherList;