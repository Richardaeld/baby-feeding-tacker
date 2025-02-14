import { capitalizeEveryFirstLetter } from './general'

const revealFormElement = (target, toggleType, e) => {
   const formNodes = e.target.closest('form').querySelectorAll('fieldset');
   formNodes.forEach(node => {
      const text = node.querySelector('span').textContent;

      if (text == capitalizeEveryFirstLetter(target)) {
         switch (toggleType) {
         case 'remove': return node.classList.remove('visibility-none');
         case 'add'   : return node.classList.add('visibility-none');
         }
      }
   })
}

export function formStructure () {
   const form = {
      header: 'Add Feeding',
      inputs: [
      // Baby Name
      {
         name:'name',
         type: 'input_radio',
         radio: [
            'Liam',
            'Sophia',
         ]
      },
      // Events
      {
         name:'event_type',
         type:'input_radio',
         radio: [
            'Bath',
            'Diaper',
            'Feeding',
            'Growth',
            'Medication',
            'Night Check',
            'Pumping',
            'Temperature',
            'Tummy Time',
         ],
         className:'event-type',
         events: {
            onClick:[
            (e) => {
               revealFormElement('feeding_type',               'add', e);
               revealFormElement('breast',                     'add', e);
               revealFormElement('bottle',                     'add', e);
               revealFormElement('bath_post_care_oil',         'add', e);
               revealFormElement('bath_post_care_lotion',      'add', e);
               revealFormElement('diaper_type',                'add', e);
               revealFormElement('growth_height',              'add', e);
               revealFormElement('growth_height_unit',         'add', e);
               revealFormElement('growth_weight',              'add', e);
               revealFormElement('growth_weight_unit',         'add', e);
               revealFormElement('medication_name',            'add', e);
               revealFormElement('medication_dosage',          'add', e);
               revealFormElement('medication_dosage_unit',     'add', e);
               revealFormElement('night_check_frequency',      'add', e);
               revealFormElement('night_check_frequency_unit', 'add', e);
               revealFormElement('pumping_amount_(oz)',        'add', e);
               revealFormElement('pumping_breast',             'add', e);
               revealFormElement('temperature_degree_f',       'add', e);
               revealFormElement('tummy_time_duration',        'add', e);
               revealFormElement('tummy_time_duration_units',  'add', e);
   
               switch(e.target.value) {
                  case 'Feeding':
                  revealFormElement('feeding_type', 'remove', e);
                  break;
                  case 'Bath'   :
                  revealFormElement('bath_post_care_oil',    'remove', e);
                  revealFormElement('bath_post_care_lotion', 'remove', e);
                  break;
                  case 'Diaper' :
                  revealFormElement('diaper_type', 'remove', e);
                  break;
                  case 'Growth' :
                  revealFormElement('growth_height',      'remove', e);
                  revealFormElement('growth_height_unit', 'remove', e);
                  revealFormElement('growth_weight',      'remove', e);
                  revealFormElement('growth_weight_unit', 'remove', e);
                  break;
                  case 'Medication':
                  revealFormElement('medication_name',        'remove', e);
                  revealFormElement('medication_dosage',      'remove', e);
                  revealFormElement('medication_dosage_unit', 'remove', e);
                  break;
                  case 'Night Check':
                  revealFormElement('night_check_frequency',      'remove', e);
                  revealFormElement('night_check_frequency_unit', 'remove', e);
                  break;
                  case 'Pumping'    :
                  revealFormElement('pumping_amount_(oz)', 'remove', e);
                  revealFormElement('pumping_breast',      'remove', e);
                  break;
                  case 'Temperature':
                  revealFormElement('temperature_degree_f', 'remove', e);
                  break;
                  case 'Tummy Time':
                  revealFormElement('tummy_time_duration',       'remove', e);
                  revealFormElement('tummy_time_duration_units', 'remove', e);
                  break;
               }
            }
            ]
         }
      },
      {
         name: 'feeding_type',
         type: 'input_radio',
         radio: ['Bottle', 'Breast'],
         className: "visibility visibility-none",
         events: {
            onClick:[
            (e) => {
               (e.target.value === 'Breast')
                  ? revealFormElement('breast', 'remove', e)
                  : revealFormElement('breast', 'add',    e);
            },
            (e) => {
               (e.target.value === 'Bottle')
                  ? revealFormElement('bottle', 'remove', e)
                  : revealFormElement('bottle', 'add',    e);
            },
            ]
         },
      },
      // ! ====== AUX Items ====== ! //
      // ! Bath
      {
         name: 'bath_post_care_oil',
         type: 'input_checkbox',
         className: "visibility visibility-none",
         checked: false,
      },
      {
         name: 'bath_post_care_lotion',
         type: 'input_checkbox',
         className: "visibility visibility-none",
         checked: false,
      },
      // ! Diaper
      {
         name: 'diaper_type',
         type: 'input_radio',
         radio: ['Pee', 'Poop', 'Blow-out'],
         className: "visibility visibility-none",
      },
      // ! Feeding
      {
         name: 'breast',
         type: 'input_radio',
         radio: ['Left', 'Right'],
         className: "visibility visibility-none"
      },
      {
         name: 'bottle',
         type: 'input_radio',
         radio: Array.from({ length:16 }, (_, i) => i + 1 + ' oz'),
         className: "visibility visibility-none"
      },
      // ! Growth
      {
         name: 'growth_height',
         type: 'input_text',
         className: "visibility visibility-none",
         inputType: 'number',
         step: 1,
         min: 0,
         max: 100,
      },
      {
         name: 'growth_height_unit',
         type: 'input_radio',
         className: "visibility visibility-none",
         radio: ['inches', 'centimeter'],
      },
      {
         name: 'growth_weight',
         type: 'input_text',
         className: "visibility visibility-none",
         inputType: 'number',
         step: 1,
         min: 0,
         max: 200,
      },
      {
         name: 'growth_weight_unit',
         type: 'input_radio',
         className: "visibility visibility-none",
         radio: ['oz', 'lbs']
      },
      // ! Medication
      {
         name: 'medication_name',
         type: 'input_text',
         className: "visibility visibility-none",
         inputType: 'text',
      },
      {
         name: 'medication_dosage',
         type: 'input_text',
         className: "visibility visibility-none",
         inputType: 'number',
         step: .01,
         min: 0,
         max: 200,
      },
      {
         name: 'medication_dosage_unit',
         type: 'input_radio',
         className: "visibility visibility-none",
         radio: ['Pill', 'oz', 'Other']
      },
      // ! Night check
      {
         name: 'night_check_frequency',
         type: 'input_text',
         className: "visibility visibility-none",
         inputType: 'number',
         step: 1,
         min: 0,
         max: 100,
      },
      {
         name: 'night_check_frequency_unit',
         type: 'input_radio',
         className: "visibility visibility-none",
         radio: ['Hour','Minute']
      },
      // ! Pumping
      {
         name: 'pumping_amount_(oz)',
         type: 'input_text',
         className: "visibility visibility-none",
         inputType: 'number',
         step: .01,
         min: 0,
         max: 100,
      },
      {
         name: 'pumping_breast',
         type: 'input_radio',
         radio: ['Left', 'Right'],
         className: "visibility visibility-none"
      },
      // ! Temperature
      {
         name: 'temperature_degree_f',
         type: 'input_text',
         className: "visibility visibility-none",
         inputType: 'number',
         step: 1,
         min: 0,
         max: 100,
      },
      // ! Tummy Time
      {
         name: 'tummy_time_duration',
         type: 'input_text',
         className: "visibility visibility-none",
         inputType: 'number',
         step: 1,
         min: 0,
         max: 100,
      },
      {
         name: 'tummy_time_duration_units',
         type: 'input_radio',
         className: "visibility visibility-none",
         radio: [
            'Minutes', 'Hours'
         ]
      },
      {
         name:'notes',
         type:'textarea',
      }
      ]
   }
   form.inputs.map(input => input.key = crypto.randomUUID());
   return form;
}