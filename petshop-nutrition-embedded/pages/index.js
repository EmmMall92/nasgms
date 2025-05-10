import { useState } from "react";

const foodDatabase = [
  {
    name: " ACANA CLASSIC RED 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ACANA LIGHT & FIT RECIPE 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ACANA PRAIRIE POULTRY 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ACANA RANCHLANDS 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ACANA SENIOR 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ACANA GRASS-FED LAMB 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ACANA ADULT SMALL BREED RECIPE 6kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " JOSIDOG MINI 900gr",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " JOSERA MINI VITA SENIOR 900gr",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " JOSERA MINI WELL 900gr",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI PUPPY 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN CCN MINI STERILISED ADULT 1kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI EXIGENT 1kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI STERILISED ADULT 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN XSMALL ADULT 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN BHN FRENCH BULLDOG 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MEDIUM PUPPY 4kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MALTESE ADULT 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN XSMALL PUPPY 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN XSMALL ADULT 8+ 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI ADULT 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN POODLE 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI ADULT 4kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MEDIUM STERILISED ADULT 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI PUPPY 4kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI ADULT 8+ 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI AGEING +12 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN YORKSHIRE ADULT 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN YORKSHIRE 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN CHIHUAHUA 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MAXI STERILISED ADULT 3kg",
    targets: {
      size: "ΜΕΓΑΛΟΣΩΜΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN FRENCH BULLDOG JUNIOR 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN WESTIE 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN WESTIE 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI EXIGENT 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI DIGESTIVE CARE 1kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MINI STARTER MOTHER & BABY 1kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN SHN MAXI ADULT 4kg",
    targets: {
      size: "ΜΕΓΑΛΟΣΩΜΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MEDIUM ADULT 4kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MEDIUM STARTER 4kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MAXI STARTER MOTHER & BABY 4kg",
    targets: {
      size: "ΜΕΓΑΛΟΣΩΜΑ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN MAXI PUPPY 4kg",
    targets: {
      size: "ΜΕΓΑΛΟΣΩΜΑ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ROYAL CANIN XSMALL AGEING 12+ 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PETTYS MINI ADULT CHICKEN 1.5Kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PETTYS MEDIUM ADULT CHICKEN 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PETTYS ALL BREEDS PUPPY CHICKEN 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PETTYS ALL BREEDS ADULT FISH 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BLACK OLYMPUS SENIOR LIGHT STERILIZED TURKEY & SALMON 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BLACK OLYMPUS ADULT SALMON 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BLACK OLYMPUS MEDIUM ADULT LAMB 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BLACK OLYMPUS PUPPY MAXI CHICKEN & TURKEY 2kg",
    targets: {
      size: "ΜΕΓΑΛΟΣΩΜΑ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BLACK OLYMPUS PUPPY MEDIUM CHICKEN & TURKEY 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BLACK OLYMPUS ADULT MEDIUM CHICKEN & TURKEY 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BLACK OLYMPUS MINI ADULT CHICKEN & TURKEY 2kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BARKING CHOP LICKIN LAMB 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BARKING GOLDEN YEARS SENIOR 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ANIMA ADULT ALL BREEDS LAMB 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ANIMA ADULT ALL BREEDS LIGHT & STERILISED CHICKEN & TURKEY 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ANIMA PUPPY CHICKEN & TURKEY 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ANIMA ADULT ALL BREEDS CHICKEN & TURKEY 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " ANIMA PUPPY LARGE BREED CHICKEN & TURKEY 3kg",
    targets: {
      size: "ΜΕΓΑΛΟΣΩΜΑ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF ADULT SENIOR LIGHT STERILIZED TURKEY & SALMON 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF ADULT MINI SENIOR LIGHT STERILISED SALMON & TURKEY 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF ADULT CHICKEN & SALMON 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF ADULT LAMB & SALMON 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF ADULT CHICKEN & VEGGIES 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF ADULT BEEF & SALMON 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF ADULT MINI SENIOR LIGHT STERILISED SALMON & TURKEY 5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF SENIOR LIGHT STERILISED MEDITERRANEAN FRESH TURKEY 5kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF PUPPY CHICKEN & FISH 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF PUPPY CHICKEN & FISH 6kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " AMBROSIA GF PUPPY LARGE CHICKEN & SALMON 2kg",
    targets: {
      size: "ΜΕΓΑΛΟΣΩΜΑ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " FROLIC ΜΟΣΧΑΡΙ 1.5kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRESTIGE MINI ADULT 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRESTIGE ADULT MINI LIGHT & STERILIZED 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRESTIGE ADULT MEDIUM 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRESTIGE ADULT MEDIUM LIGHT & STERILIZED 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRESTIGE MINI PUPPY 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Dr.Clauder's Senior Light 4kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " TONUS DOG CHOW ADULT CHICKEN 2.5kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " TONUS DOG CHOW LIGHT TURKEY 2.5kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " TONUS DOG CHOW SENSITIVE SALMON 2.5kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRO PLAN SMALL & MINI ADULT Κοτόπουλο 700gr",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRO PLAN SMALL & MINI ADULT Sens. Digest. Αρνί 700gr",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRO PLAN SMALL MINI ADULT SALMON STVE SKIN 700gr",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRO PLAN SMALL & MINI PUPPY Κοτόπουλο 700gr",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRO PLAN ADULT SMALL & MINI SENSITIVE SKIN SALMON 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRO PLAN SMALL & MINI ADULT Κοτόπουλο 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PROPLAN SMALL & MINI ADULT Sens.Digest Lamb 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRO PLAN SMALL & MINI PUPPY Κοτόπουλο 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PRO PLAN MEDIUM PUPPY ΚΟΤΟΠΟΥΛΟ 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " KUDO MINI ADULT ADRIATIC FISH 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " KUDO MINI ADULT RED MEAT & VEGETABLES 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " KUDO MEDIUM/MAXI ADULT ADRIATIC FISH 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " KUDO MEDIUM/MAXI ADULT RED MEAT & VEGETABLES 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " KUDO SENIOR & LIGHT ADRIATIC FISH 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " KUDO SENIOR & LIGHT TURKEY & DUCK 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BELCANDO BASELINE OLDIE & LIGHT 1kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BELCANDO SENIOR SENSITIVE 1kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BELCANDO BASELINE FISHER 1kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BELCANDO FINEST CROC 1kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BELCANDO FINEST LIGHT 1kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " BELCANDO BASELINE GF JOKER 1kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " PROLIFE SPECIAL COOK ADULT 2.5kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Unica Natura Mini Salmon 2.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ALL LIFE STAGES",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Unica Natura Mini Salmon 800gr",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ALL LIFE STAGES",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Unica Natura Maxi Salmon 2.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ALL LIFE STAGES",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Unica Class Adult Medium Regular Chicken 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Unica Class Adult All Breeds Longevity Salmon 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Unica Class Adult Mini Regular Chicken 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Unica Class Adult Mini Equilibrium Lamb 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S WHITE DOG SALMON GF ADULT 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " LIFESTYLE WHITE FISH ALL BREEDS 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S PROTECTION WHITE DOG LAMB ADULT 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S PROTECTION WHITE DOG WHITE FISH & KRILL GF ADULT 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S SENIOR MINI 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S ADULT SMALL BREEDS SENSITIVE SKIN & STOMACH 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURES RED COAT LAMB GF ADULT MINI 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S PROTECTION WHITE DOG GF JUNIOR WHITE FISH & KRILL 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S WEIGHT CONTROL & STERILISED 4kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S WHITE DOG ADULT HERRING 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S SENIOR 4kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " NATURE'S PROTECTION ADULT MINI LAMB 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Schesir Dry Medium Maintenance Chicken 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Schesir Small Maintenance Chicken & Rice 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Schesir Small Maintenance Ham 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Schesir Dry Medium Maintenance Fish 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Schesir Small Maintenance Fish & Rice 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Schesir Dry Medium Maintenance Ham 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Schesir Small Puppy Chicken & Rice 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Schesir Toys Maintenance Chicken & Rice 2kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Schesir Dry Medium Puppy Chicken 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE ADULT ALL BREED LIGHT SALMON & RICE 2.5kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE ADULT MEDIUM CHICKEN 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE SENIOR MINI CHICKEN 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE PUPPY MINI STARTER CHICKEN 1.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE SENIOR MEDIUM CHICKEN 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE ADULT XS CHICKEN 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE PUPPY & JUNIOR MINI CHICKEN 800gr",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE ADULT MINI CHICKEN 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE PUPPY & JUNIOR MINI CHICKEN 3kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE ADULT XS CHICKEN 800gr",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE PUPPY & JUNIOR MEDIUM CHICKEN 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " MONGE ADULT MINI SALMON & RICE 2.5kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " HILL'S SP ADULT SMALL & MINI LIGHT CHICKEN 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " HILL'S SP ADULT SMALL & MINI CHICKEN 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " HILL'S SP MATURE SMALL & MINI CHICKEN 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " HILL'S SP PERFECT WEIGHT SMALL & MINI CHICKEN 1.5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Hill's SP Mature Adult Dog Small&Mini Chicken 300g",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " HILLS SP Adult Small & Mini Sensitive & Skin Chicken 1,5kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " HILLS SP Mature Small & Mini Chicken 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " HILLS SP Adult Small & Mini Chicken 3kg",
    targets: {
      size: "ΜΙΝΙΑΤΟΥΡΑ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " HILL'S SP ADULT MEDIUM CHICKEN 2.5kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Gemon Adult Medium Chicken 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " Gemon Puppy Medium Chicken & Rice 3kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " EDEM ADULT MINI 2kg",
    targets: {
      size: "ΜΙΚΡΟΣΩΜΟ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " EDEM ADULT SENIOR-LIGHT 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΗΛΙΚΙΩΜΕΝΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " EDEM ADULT EXIGENT 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " EDEM ADULT LAMB 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " EDEM PUPPY & JUNIOR 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΚΟΥΤΑΒΙ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
  {
    name: " EDEM ADULT FISH 2kg",
    targets: {
      size: "ΜΕΣΑΙΟΥ ΜΕΓΕΘΟΥΣ",
      age: "ΕΝΗΛΙΚΟΣ",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: %, Λιπαρά: %, Ίνες: %, Τέφρα: %."
  },
];

 [
    {
      name: "ACANA Adult Small Breed",
      targets: {
        size: "Μικρόσωμο (>4kg)",
        age: "Ενήλικος",
        condition: "Καμία",
      },
      description: "Πρωτεΐνη: 31%, Λιπαρά: 17%, Ίνες: 5%, Τέφρα: 7%.",
    },
    {
      name: "Farmina N&D Puppy Medium",
      targets: {
        size: "Μεσαίου μεγέθους (<25kg)",
        age: "Κουτάβι",
        condition: "Καμία",
      },
      description: "Πρωτεΐνη: 30%, Λιπαρά: 18%, Ίνες: 2.9%, Τέφρα: 6.8%.",
    },
  ];

  const nutritionalInfo = {
    "Θηλασμός/Απογαλακτισμός": "Πρωτεΐνη >25%, Λιπαρά >15%, Φυτικές ίνες 1-3%, Τέφρα 6-8%.",
    "Κουτάβι": "Πρωτεΐνη 22-32%, Λιπαρά 10-25%, Φυτικές ίνες 2-4%, Τέφρα 6-8%.",
    "Ενήλικος": "Πρωτεΐνη 18-25%, Λιπαρά 8-15%, Φυτικές ίνες 2-4%, Τέφρα 6-9%.",
    "Ηλικιωμένος": "Πρωτεΐνη 20-25%, Λιπαρά 8-12%, Φυτικές ίνες 3-6%, Τέφρα 5-8%.",
  };

  const getResults = () => {
    const norm = v => v?.trim().toLowerCase();
    return foodDatabase.filter(f =>
      norm(f.targets.size) === norm(size) &&
      norm(f.targets.age) === norm(age) &&
      norm(f.targets.condition) === norm(condition)
    );
  };

  const handleSearch = () => {
    if (!size || !age || !condition) {
      setError("⚠️ Παρακαλώ συμπληρώστε όλα τα πεδία.");
      return;
    }
    setError("");
    const res = getResults();
    setResults(res);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Προτάσεις Τροφής</h1>

      <select value={size} onChange={e => setSize(e.target.value)} className="w-full border rounded p-2">
        <option value="">Επιλέξτε μέγεθος</option>
        <option>Μικρόσωμο (&gt;4kg)</option>
        <option>Μεσαίου μεγέθους (&lt;25kg)</option>
        <option>Μεγαλόσωμο (&lt;45kg)</option>
        <option>Γιγαντόσωμο (&gt;45kg)</option>
      </select>

      <select value={age} onChange={e => setAge(e.target.value)} className="w-full border rounded p-2">
        <option value="">Επιλέξτε ηλικία</option>
        <option>Θηλασμός/Απογαλακτισμός</option>
        <option>Κουτάβι</option>
        <option>Ενήλικος</option>
        <option>Ηλικιωμένος</option>
      </select>

      <select value={condition} onChange={e => setCondition(e.target.value)} className="w-full border rounded p-2">
        <option value="">Επιλέξτε κατάσταση</option>
        <option>Καμία</option>
        <option>Στειρωμένος</option>
        <option>Αλλεργικός</option>
        <option>Ιδιότροπος / Απαιτητικός</option>
      </select>

      {error && <div className="text-red-600">{error}</div>}

      <button onClick={handleSearch} className="bg-emerald-600 text-white px-4 py-2 rounded shadow">
        Δείξε μου προτάσεις
      </button>

      {results.length > 0 && (
        <div className="bg-blue-50 p-4 mt-4 rounded shadow space-y-2">
          <h2 className="font-semibold">Διατροφικές Ανάγκες:</h2>
          <ul className="list-disc ml-4 text-sm text-gray-700">
            {nutritionalInfo[age]?.split(". ").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {results.map((r, i) => (
            <div key={i} className="p-3 bg-white border rounded mt-2">
              <h3 className="font-semibold">{r.name}</h3>
              <p className="text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
