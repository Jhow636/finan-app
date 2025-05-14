import React, {useState} from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {styles} from './CalendarModal.styles';
import {ptBR} from './LocalCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({setVisible, handleFilter}: any) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});

  function handleOnDayPress(date: any) {
    setDateNow(new Date(date.dateString));

    let markedDay = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3b3dbf',
      textColor: '#fff',
    };

    setMarkedDates(markedDay);
  }

  function handleFilterDate() {
    handleFilter(dateNow);
    setVisible();
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>

      <View style={styles.modalContent}>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#ff0000',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
          }}
        />
        <TouchableOpacity
          onPress={handleFilterDate}
          style={styles.buttonFilter}>
          <Text style={styles.textButtonFilter}>Filtrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
