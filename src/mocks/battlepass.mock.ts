import {
  BattlepassMetadata,
  BattlepassWeekData,
  BattlepassUpdateData,
} from 'src/app/types/battlepass.types';

export const battlepassMetadataMock: BattlepassMetadata = {
  startDate: new Date(2021, 3, 28),
  endDate: new Date(2021, 5, 7),
  nbOfWeeks: 7,
  currentWeek: 5,
  questsMetadata: [
    {
      id: 0,
      goal: 'Se connecter',
      reward: 120,
      type: 0,
    },
    {
      id: 1,
      goal: 'Compléter 4 missions quotidiennes',
      reward: 150,
      type: 0,
    },
    {
      id: 2,
      goal: 'Miner 10 minéraux',
      reward: 150,
      type: 0,
    },
    {
      id: 3,
      goal: 'Utiliser un total de 150 résines',
      reward: 225,
      type: 0,
    },
    {
      id: 4,
      goal: 'Cuisiner 20 repas',
      reward: 360,
      type: 1,
    },
    {
      id: 5,
      goal: 'Forger 20 éléments',
      reward: 360,
      type: 1,
    },
    {
      id: 6,
      goal: 'Faire 50 voeux',
      reward: 1500,
      type: 2,
    },
    {
      id: 7,
      goal: 'Gagner 12 étoiles dans les Abysses',
      reward: 2250,
      type: 2,
    },
    {
      id: 8,
      goal: "Faire l'évènement",
      reward: 3000,
      remainingDays: 4,
      type: 2,
    },
    {
      id: 9,
      goal: "Faire l'évènement suivant",
      reward: 2000,
      remainingDays: 14,
      type: 2,
    },
  ],
};

//todo: mettre toutes les quetes journa sinon les coches bugs
export const battlepassWeekDataMock: BattlepassWeekData = {
  bpProgression: {
    currentLvl: 24,
    weekXP: 7845,
    previsionalLvl: 35,
    previsionalWeekXP: 9250,
  },
  week: 2,
  questsInstance: [
    {
      id: 0,
      questMetadataId: 1,
      weekDay: 'lundi',
      status: 2,
    },
    {
      id: 1,
      questMetadataId: 1,
      weekDay: 'mardi',
      status: 2,
    },
    {
      id: 2,
      questMetadataId: 1,
      weekDay: 'mercredi',
      status: 0,
    },
    {
      id: 3,
      questMetadataId: 1,
      weekDay: 'jeudi',
      status: 1,
    },
    {
      id: 4,
      questMetadataId: 1,
      weekDay: 'vendredi',
      status: 0,
    },
    {
      id: 5,
      questMetadataId: 1,
      weekDay: 'samedi',
      status: 2,
    },
    {
      id: 6,
      questMetadataId: 1,
      weekDay: 'dimanche',
      status: 0,
    },
    {
      id: 7,
      questMetadataId: 2,
      status: 1,
    },
    {
      id: 8,
      questMetadataId: 4,
      status: 1,
    },
    {
      id: 9,
      questMetadataId: 5,
      status: 0,
    },
    {
      id: 10,
      questMetadataId: 6,
      status: 1,
    },
    {
      id: 11,
      questMetadataId: 7,
      status: 2,
    },
    {
      id: 12,
      questMetadataId: 8,
      status: 0,
    },
    {
      id: 13,
      questMetadataId: 9,
      status: 1,
    },
  ],
};

export const battlepassUpdateDataMock: BattlepassUpdateData = {
  currentLvl: 28,
  weekXP: 7945,
  previsionalLvl: 39,
  previsionalWeekXP: 9450,
};
