import { Injectable } from '@angular/core';
import { RoomData } from '../rooms-page/room/room.interface';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: RoomData[] = [
    {
      id: 'standard',
    title: "Pokoje Standard",
    description: "Pokoje Standard przeznaczone są dla 2 osób. Oferują wygodne zakwaterowanie z biurkiem, telewizorem z płaskim ekranem oraz dostępem do bezpłatnego Wi-Fi.",
    capacity: "2",
    amenities: "Biurko, telewizor z płaskim ekranem, bezpłatne Wi-Fi",
    additionalEquipment: "Zestaw do parzenia kawy i herbaty, suszarka do włosów, klimatyzacja",
    view: "Widok na miasto lub ogród",
    price: 300,
    images: [
      {
        src: "suites_photos/standart/andrew-neel--nrBcq94kLU-unsplash.jpg",
        alt: "Pokój Standard z widokiem na wnętrze."
      },
      {
        src: "suites_photos/standart/andrew-neel-B4rEJ09-Puo-unsplash.jpg",
        alt: "Biurko w pokoju Standard."
      },
      {
        src: "suites_photos/standart/andrew-neel-w84MOrTfbdw-unsplash.jpg",
        alt: "Łóżko w pokoju Standard."
      },
      {
        src: "suites_photos/standart/angelina-herbert-2lrOtEju2aU-unsplash.jpg",
        alt: "Telewizor z płaskim ekranem w pokoju Standard."
      }
    ]
    },
    {
      id: 'standard-rodzinny',
      title: "Pokoje Standard Rodzinny",
      description: "Przestronne pokoje rodzinne idealne dla 4 osób, zapewniające komfortowy wypoczynek dla całej rodziny. Wyposażone w dwa podwójne łóżka, przestronną łazienkę oraz kącik zabaw dla dzieci.",
      capacity: "4",
      amenities: "Dwa podwójne łóżka, telewizor 50\", bezpłatne Wi-Fi, kącik zabaw dla dzieci",
      additionalEquipment: "Lodówka, czajnik elektryczny, suszarka do włosów, klimatyzacja, sejf",
      view: "Widok na park lub miasto",
      price: 450,
      images: [
        {
          src: "suites_photos/standard_family/standard_family_bed1.jpg",
          alt: "Przestronny pokój rodzinny z dwoma łóżkami"
        },
        {
          src: "suites_photos/standard_family/standard_family_bed2.jpg",
          alt: "Druga perspektywa pokoju rodzinnego"
        },
        {
          src: "suites_photos/standard_family/standard_family_bathroom.jpg",
          alt: "Łazienka rodzinna"
        },
        {
          src: "suites_photos/standard_family/standard_family_desk.jpg",
          alt: "Widok na biurko w pokoju rodzinnym"
        }
      ]
    },
    {
      id: 'deluxe',
  title: "Pokoje Deluxe",
  description: "Luksusowe pokoje z podwyższonym standardem, oferujące elegancką przestrzeń wypoczynkową. Pokoje typu Deluxe łączą w sobie komfort z nowoczesnością, zapewniając niezapomniane wrażenia z pobytu.",
  capacity: "2",
  amenities: "Łóżko king-size, smart TV 55\", bezpłatne szybkie Wi-Fi, minibar",
  additionalEquipment: "Ekspres do kawy Nespresso, szlafrok i kapcie, wysokiej klasy kosmetyki, system audio Bluetooth",
  view: "Widok na panoramę miasta",
  price: 500,
  images: [
    {
      src: "suites_photos/deluxe/deluxe_bed3.jpg",
      alt: "Eleganckie wnętrze pokoju Deluxe"
    },
    {
      src: "suites_photos/deluxe/deluxe_bathroom2.jpg",
      alt: "Luksusowa łazienka z wanną"
    },
    {
      src: "suites_photos/deluxe/deluxe_bed5.jpg",
      alt: "Strefa wypoczynkowa"
    },
    {
      src: "suites_photos/deluxe/deluxe_desk.jpg",
      alt: "Panoramiczny widok z okna"
    }
  ]
    },
   {
    id: 'deluxe-rodzinny',
    title: "Pokoje Deluxe Rodzinny",
    description: "Luksusowe apartamenty rodzinne z oddzielną sypialnią dla rodziców i pokojem dla dzieci. Przestronne wnętrza zapewniają komfort i prywatność każdemu członkowi rodziny.",
    capacity: "4-5",
    amenities: "Sypialnia z łóżkiem king-size, pokój dziecięcy z dwoma łóżkami, 2 smart TV 55\", konsola do gier",
    additionalEquipment: "Ekspres do kawy, mikrofalówka, lodówka, zestaw do parzenia herbaty, szlafroki w różnych rozmiarach, strefa zabaw",
    view: "Widok na morze lub ogród",
    price: 650,
    images: [
      {
        src: "suites_photos/deluxe_family/deluxe_family_bed1.jpg",
        alt: "Główna sypialnia Deluxe Family"
      },
      {
        src: "suites_photos/deluxe_family/deluxe_family_bathroom.jpg",
        alt: "Pokój dziecięcy"
      },
      {
        src: "suites_photos/deluxe_family/deluxe_family_livingroom.jpg",
        alt: "Salon rodzinny"
      },
      {
        src: "suites_photos/deluxe_family/deluxe_family_view.jpg",
        alt: "Strefa zabaw dla dzieci"
      }
    ]
   },
   {
    id: 'premier',
  title: "Pokoje Premier",
  description: "Ekskluzywne pokoje dla najbardziej wymagających gości. Wyjątkowy design i najwyższej jakości wykończenie tworzą niepowtarzalną atmosferę luksusu i elegancji.",
  capacity: "2",
  amenities: "Luksusowe łóżko king-size, 65\" OLED TV, system kina domowego, ekskluzywny minibar",
  additionalEquipment: "Profesjonalny ekspres do kawy, prywatny butler na życzenie, jacuzzi w łazience, garderoba, iPad do sterowania pokojem",
  view: "Panoramiczny widok na miasto i morze",
  price: 700,
  images: [
    {
      src: "suites_photos/premier/premier_bed1.jpg",
      alt: "Luksusowa sypialnia Premier"
    },
    {
      src: "suites_photos/premier/premier_bed2.jpg",
      alt: "Elegancki salon"
    },
    {
      src: "suites_photos/premier/premier_bathroom.jpg",
      alt: "Łazienka z jacuzzi"
    },
    {
      src: "suites_photos/premier/premier_view.jpg",
      alt: "Widok z tarasu"
    }
  ]
},
{
  id: 'executive',
title: "Pokoje Executive",
description: "Najwyższy standard zakwaterowania łączący przestrzeń biurową z luksusowym wypoczynkiem. Idealne dla podróżujących biznesowo, zapewniające prywatną przestrzeń do pracy i relaksu.",
capacity: "2",
amenities: "Łóżko king-size, osobny salon, strefa biurowa z ergonomicznym fotelem, 2 smart TV 65\", dostęp do Executive Lounge",
additionalEquipment: "Profesjonalne biurko, drukarka, sejf na laptop, ekspres do kawy, minibar premium, prywatna concierge, dostęp do sali konferencyjnej",
view: "Panoramiczny widok na centrum biznesowe miasta",
price: 800,
images: [
  {
    src: "suites_photos/executive/executive_room.jpg",
    alt: "Przestronna sypialnia Executive"
  },
  {
    src: "suites_photos/executive/executive_room2.jpg",
    alt: "Profesjonalna strefa biurowa"
  },
  {
    src: "suites_photos/executive/executive_bathroom.jpg",
    alt: "Salon biznesowy"
  },
  {
    src: "suites_photos/executive/executive_lounge.jpg",
    alt: "Widok na centrum biznesowe"
  }
]
}
  ];

  getRoomById(id: string): RoomData | undefined {
    return this.rooms.find(room => room.id === id);
  }

  getAllRooms(): RoomData[] {
    return this.rooms;
  }
}
