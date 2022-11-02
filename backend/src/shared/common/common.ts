export enum UserRole {
  ADMIN = 'administrator',
  COMPANY_ADMIN = 'company_admin',
  COMPANY_USER = 'company_user',
}

export enum MetricTypeEnum {
  SIGN_UP = 'sign_up',
  LOGIN = 'login',
  GENERATE_REPORT = 'generate_report',
  VIEW_REPORT = 'view_report',
}

export enum ReportTypeEnum {
  CONTENT_ANALYSIS = 'content_analysis',
  PROGRAMME = 'programme',
  TOP_RATINGS = 'top_rating',
  CHANNELS = 'channels',
  SCHEDULES = 'schedules',
  TRANSMISSIONS = 'transmissions',
  MINUTES_DATA = 'minutes_data',
  DAY_PARTS = 'day_parts',
  OVERNIGHTS = 'overnights',
  SCREEN_WATCH = 'screen_watch',
  NEW_AND_RETURN = 'new_and_return',
}

export enum ProgrammeDetailIntervalEnum {
  PROGRAMME_DATA_1MIN = '1min_interval',
  PROGRAMME_DATA_5MIN = '5min_interval',
  PROGRAMME_DATA_1MIN_NO_INTERVAL = '1min_no_interval',
  PROGRAMME_DATA_5MIN_NO_INTERVAL = '5min_no_interval',
}

export enum AudienceCategoryCodeEnum {
  CHILDREN_AGED_4_15 = 203001,
  ALL_MEN = 211001,
  ADULT_16_24 = 205001,
  ADULT_16_34 = 206001,
  ADULT_35_44 = 102005,
  ADULT_45_54 = 102006,
  ADULT_55_64 = 102007,
  ALL_ADULTS = 203002,

  BOYS_4_15 = 250001,

  INDIVIDUALS_AB = 225001,
  INDIVIDUALS_C1 = 225002,
  INDIVIDUALS_C2 = 225003,
}

export enum AudienceCategoryEnum {
  TOTAL_CHILDREN_AGED_4_15 = 'Total Children aged 4-15',
  ADULT_16_24 = 'Adults 16-24',
  ADULT_16_34 = 'Adults 16-34',
  ADULT_25_34 = 'Adults 25-34',
  ADULT_35_44 = 'Adults 35-44',
  ADULT_45_54 = 'Adults 45-54',
  ADULT_55_64 = 'Adults 55-64',
  ALL_ADULT_16_ABOVE = 'All Adults 16+',

  TOTAL_MEN = 'Total Men',
  BOYS_4_15 = 'Boys 4-15',

  INDIVIDUALS_AB = 'Individuals AB',
  INDIVIDUALS_C1 = 'Individuals C1',
  INDIVIDUALS_C2 = 'Individuals C2',
}

export enum ResultColumnEnum {
  ADULT_65_ABOVE = 'Adult 65+',
  ADULT_16_24_ABOVE = 'Adults 16-24',
  ADULT_25_34_ABOVE = 'Adults 25-34',
  ADULT_35_44_ABOVE = 'Adults 35-44',
  ADULT_45_54_ABOVE = 'Adults 45-54',
  ADULT_55_64_ABOVE = 'Adults 55-64',
  CHILDREN_4_15 = 'Children 4-15',
  INDIVIDUAL_4_PLUS = 'Individuals 4+',
  MALE_4_AND_ABOVE = 'Male 4+',
  FEMALE_4_AND_ABOVE = 'Female 4+',
  MALE_16_AND_ABOVE = 'Male 16+',
  FEMALE_16_AND_ABOVE = 'Female 16+',
  INDIVIDUALS_4_PLUS_AB = 'Individuals 4+ AB',
  INDIVIDUALS_4_PLUS_C1 = 'Individuals 4+ C1',
  INDIVIDUALS_4_PLUS_C2 = 'Individuals 4+ C2',
  INDIVIDUALS_4_PLUS_DE = 'Individuals 4+ DE',
}
