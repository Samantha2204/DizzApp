export const screenDetails = [
  {
    layout: 'instruction_screen',
    video: require('./videos/DHT.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT01.wav'),
    audio2: '',
    content: [
      'Ask the patient to sit upright, on the bed/plinth, with legs extended. ',
      'Turn the head 45° to the RIGHT. \n\n',
      'Lie the patient down with head/neck extended 30° (either over a pillow or the end of the plinth/bed).'
    ]
  },
  {
    layout: 'nystagmus_screen',
    video: require('./videos/RightPosterior.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT02.wav'),
    audio2: '',
    content: [
      'Remain in this position for 30 seconds and observe for nystagmus. ',
      'Timer is provided on the next screen. \n\n',
      'The nystagmus will be up-beating, clockwise torsional in direction ',
      'if the right posterior canal is affected. '
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/DHT/DHT03.wav'),
    audio2: '',
    content: [
      'Start the timer and observe for up-beating, clockwise torsional nystagmus. '
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/DHT.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT04.wav'),
    audio2: '',
    content: [
      'When the nystagmus has stopped, sit the patient upright again. \n\n',
      'Advise the patient that they will likely experience vertigo again when they sit up.'
    ]
  },
  {
    layout: 'selection_screen',
    video: require('./videos/RightPosterior.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT05.wav'),
    audio2: '',
    content: [
      'Did you observe up-beating, clockwise torsional nystagmus? ',
      'Choose one of the options below.'
    ],
    nystagmusType: 'Right Posterior'
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/DHT.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT06.wav'),
    audio2: '',
    content: [
      'Turn the head 45° to the LEFT. \n\n',
      'Lie the patient down with head/neck extended 30° (either over a pillow or the end of the plinth/bed).'
    ]
  },
  {
    layout: 'nystagmus_screen',
    video: require('./videos/LeftPosterior.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT07.wav'),
    audio2: '',
    content: [
      'Remain in this position for 30 seconds and observe for nystagmus. ',
      'Timer is provided on the next screen. \n\n',
      'The nystagmus will be up-beating, counter-clockwise torsional in direction if the left posterior canal is affected.',
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/DHT/DHT08.wav'),
    audio2: '',
    content: [
      'Start the timer and observe for up-beating, counter-clockwise torsional nystagmus. ',
    ]
  },
  {
    layout: 'selection_screen',
    video: require('./videos/LeftPosterior.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT09.wav'),
    audio2: '',
    content: [
      'Did you observe up-beating, counter-clockwise torsional nystagmus? ',
      'Choose one of the options below.'
    ],
    nystagmusType: 'Left Posterior'
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/SupineRoll.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT10.wav'),
    audio2: '',
    content: [
      'Position the patient supine with the head in midline or neutral position i.e. ',
      'the patient is lying on their back with their nose pointing straight up towards the ceiling.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/SupineRoll.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT11.wav'),
    audio2: '',
    content: [
      'Quickly turn the head 90° (or as far as the patient can safely/comfortably manage) to the RIGHT.'
    ]
  },
  {
    layout: 'two_nystagmus_screen',
    video: require('./videos/Geotropic.mp4'),
    video2: require('./videos/Ageotropic.mp4'),
    audio: require('./audio/DHT/DHT12.wav'),
    audio2: '',
    content: [
      'Remain in this position for 30 seconds and observe for the nystagmus below.',
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/DHT/DHT13.wav'),
    audio2: '',
    content: [
      'Start the timer and observe for GEOTROPIC or AGEOTROPIC nystagmus. '
    ]
  },
  {
    layout: 'selection_screen',
    video: require('./videos/Geotropic.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT14.wav'),
    audio2: '',
    content: [
      'Was the nystagmus GEOTROPIC on both sides? ',
      'Choose one of the options below.'
    ],
    nystagmusType: 'Right Geotropic'
  },
  {
    layout: 'selection_screen',
    video: require('./videos/Ageotropic.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT15.wav'),
    audio2: '',
    content: [
      'Was the nystagmus AGEOTROPIC on both sides? ',
      'Choose one of the options below.'
    ],
    nystagmusType: 'Right Ageotropic'
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/SupineRoll.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT16.wav'),
    audio2: '',
    content: [
      'Turn the patient’s head back to the midline or neutral position i.e. ',
      'the patient is lying on their back with their nose pointing straight up. ',
      'Wait for any nystagmus to stop.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/SupineRoll.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT17.wav'),
    audio2: '',
    content: [
      'Quickly turn the head 90° (or as far as the patient can safely/comfortably manage) to the LEFT.'
    ]
  },
  {
    layout: 'two_nystagmus_screen',
    video: require('./videos/Geotropic.mp4'),
    video2: require('./videos/Ageotropic.mp4'),
    audio: require('./audio/DHT/DHT12.wav'),
    audio2: '',
    content: [
      'Remain in this position for 30 seconds and observe for the nystagmus below. ',
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/DHT/DHT13.wav'),
    audio2: '',
    content: [
      'Start the timer and observe for GEOTROPIC or AGEOTROPIC nystagmus. '
    ]
  },
  {
    layout: 'selection_screen',
    video: require('./videos/Geotropic.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT14.wav'),
    audio2: '',
    content: [
      'Was the nystagmus GEOTROPIC on both sides? ',
      'Choose one of the options below.'
    ],
    nystagmusType: 'Left Geotropic'
  },
  {
    layout: 'selection_screen',
    video: require('./videos/Ageotropic.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT15.wav'),
    audio2: '',
    content: [
      'Was the nystagmus AGEOTROPIC on both sides? ',
      'Choose one of the options below.'
    ],
    nystagmusType: 'Left Ageotropic'
  },
  {
    layout: 'selection_screen',
    video: require('./videos/Ageotropic.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT22.wav'),
    audio2: '',
    content: [
      'Which side of the nystagmus was the fastest? ',
      'Choose one of the options below.'
    ],
    nystagmusType: 'Fastest Side'
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/SupineRoll.mp4'),
    video2: '',
    audio: require('./audio/DHT/DHT04.wav'),
    audio2: '',
    content: [
      'When the nystagmus has stopped, sit the patient upright again. \n\n',
      'Advise the patient that they will likely experience vertigo again when they sit up.'
    ]
  },
  {
    layout: 'result_screen',
    video: '',
    video2: '',
    audio: '',
    audio2: '',
    content: [
      'Result Page'
    ]
  },
  {
    // epley manoeuvre index = 24
    layout: 'treatment_direction_screen',
    video: '',
    video2: '',
    audio: require('./audio/EM/EM1.wav'),
    audio2: '',
    content: [
      'Which side is the affected ear? Choose one of the directions to start the Epley Manoeuvre.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/EMLeft.mp4'),
    video2: require('./videos/EMRight.mp4'),
    audio: require('./audio/EM/EM2_LEFT.wav'),
    audio2: require('./audio/EM/EM2_RIGHT.wav'),
    content: [
      'The patient is placed in the upright position with the head turned 45° toward the AFFECTED. ',
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/EMLeft.mp4'),
    video2: require('./videos/EMRight.mp4'),
    audio: require('./audio/EM/EM3.wav'),
    audio2: '',
    content: [
      'The patient is rapidly laid back to the supine head-hanging 30° position, ',
      'which is then maintained for 20-30 seconds.'
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/EM/EM4.wav'),
    audio2: '',
    content: [
      'Start the timer and wait for 30 seconds. ',
      'Observe if the patient has nystagmus.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/EMLeft.mp4'),
    video2: require('./videos/EMRight.mp4'),
    audio: require('./audio/EM/EM5_LEFT.wav'),
    audio2: require('./audio/EM/EM5_RIGHT.wav'),
    content: [
      'Next, the head is turned 90° toward the UNAFFECTED and held for about 30 seconds.'
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/EM/EM4.wav'),
    audio2: '',
    content: [
      'Start the timer and wait for 30 seconds. ',
      'Observe if the patient has nystagmus.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/EMLeft.mp4'),
    video2: require('./videos/EMRight.mp4'),
    audio: require('./audio/EM/EM7_LEFT.wav'),
    audio2: require('./audio/EM/EM7_RIGHT.wav'),
    content: [
      'The head is turned a further 90° such that the patient\'s head is nearly in ',
      'the facedown position. This is also held for 20-30 seconds.'
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/EM/EM4.wav'),
    audio2: '',
    content: [
      'Start the timer and wait for 30 seconds. ',
      'Observe if the patient has nystagmus.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/EMLeft.mp4'),
    video2: require('./videos/EMRight.mp4'),
    audio: require('./audio/EM/EM9_LEFT.wav'),
    audio2: require('./audio/EM/EM9_RIGHT.wav'),
    content: [
      'The patient is then brought into the upright sitting position with their head still turned 45° ',
      'to the UNAFFECTED until they are sitting fully upright. '
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/EMLeft.mp4'),
    video2: require('./videos/EMRight.mp4'),
    audio: require('./audio/EM/EM10.wav'),
    audio2: '',
    content: [
      'Advise the patient that they will likely experience some vertigo when sitting upright. ',
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/EMLeft.mp4'),
    video2: require('./videos/EMRight.mp4'),
    audio: require('./audio/EM/EM11.wav'),
    audio2: '',
    content: [
      'The therapist should stay close to the patient and ensure that they do not fall when sitting upright. \n\n',
      'This is important especially if they do get vertigo when sitting up.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/EMLeft.mp4'),
    video2: require('./videos/EMRight.mp4'),
    audio: require('./audio/EM/EM12.wav'),
    audio2: '',
    content: [
      'When the patient is sitting upright, they can turn their head to the midline and look straight ahead. \n\n',
      'The manoeuvre is now complete.'
    ]
  },
  {
    // lempert manoeuvre index = 36 
    layout: 'treatment_direction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM1.wav'),
    audio2: '',
    content: [
      'Which side is the affected ear? Choose one of the directions to start the Lempert Manoeuvre.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM2.wav'),
    audio2: '',
    content: [
      'Place a single pillow under the patient’s head.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM3_LEFT.wav'),
    audio2: require('./audio/LM/LM3_RIGHT.wav'),
    content: [
      'Roll the patient onto their AFFECTED side and remain in this position for 30 seconds. '
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/LM/LM4.wav'),
    audio2: '',
    content: [
      'Start the timer and wait for 30 seconds. ',
      'Observe if the patient has nystagmus.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM5.wav'),
    audio2: '',
    content: [
      'Roll the patient onto their back, into the supine position, and remains in this position for 30 seconds.'
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/LM/LM4.wav'),
    audio2: '',
    content: [
      'Start the timer and wait for 30 seconds. ',
      'Observe if the patient has nystagmus.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM7_LEFT.wav'),
    audio2: require('./audio/LM/LM7_RIGHT.wav'),
    content: [
      'Roll the patient to the UNAFFECTED side and remain in this position for 30 seconds. '
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/LM/LM4.wav'),
    audio2: '',
    content: [
      'Start the timer and wait for 30 seconds. ',
      'Observe if the patient has nystagmus.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM9_LEFT.wav'),
    audio2: require('./audio/LM/LM9_RIGHT.wav'),
    content: [
      'Turn the patient\'s head 45°- 60° towards the UNAFFECTED side ',
      '(so their nose is pointing down toward the bed/plinth) and ',
      'remain in this position for 30 seconds.'
    ]
  },
  {
    layout: 'timer_screen',
    video: '',
    video2: '',
    audio: require('./audio/LM/LM4.wav'),
    audio2: '',
    content: [
      'Start the timer and wait for 30 seconds. ',
      'Observe if the patient has nystagmus.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM11_LEFT.wav'),
    audio2: require('./audio/LM/LM11_RIGHT.wav'),
    content: [
      'The patient is then brought into the upright sitting position with their head still turned 45°- 60° ',
      'to the UNAFFECTED until they are sitting fully upright. ',
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM12.wav'),
    audio2: '',
    content: [
      'Advise the patient that they will likely experience some vertigo when sitting upright. ',
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM13.wav'),
    audio2: '',
    content: [
      'The therapist should stay close to the patient and ensure that they do not fall when sitting upright. \n\n',
      'This is important especially if they do get vertigo when sitting up.'
    ]
  },
  {
    layout: 'instruction_screen',
    video: require('./videos/LMLeft.mp4'),
    video2: require('./videos/LMRight.mp4'),
    audio: require('./audio/LM/LM14.wav'),
    audio2: '',
    content: [
      'When the patient is sitting upright they can turn their head to the midline and look straight ahead. \n\n',
      'The manoeuvre is now complete.'
    ]
  },
];