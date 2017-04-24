'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-GB': {
        translation: {
            FACTS: [
                'Skip the sink.Dishwashers use half the energy, one-sixth of the water, and less soap than hand-washing dishes, reports a German study. Just make sure it’s full before you run it: Doing so can save 100 pounds of carbon dioxide and $40 per year, according to the EPA.',
                'Reusable grocery bags help reduce the use of plastic bags at all stores. Remember to keep one handy at all times.',
                'Doing all your laundry in cold water saves energy. In fact, almost 90% of the energy consumed by a washing machine goes to heating the water, according to Energy Star. ',
                'Use natural cleaning products that are more environmental friendly - such as seventh generation, they are bidegradable.',
                'Research shows antimicrobial ingredients triclosan and triclocarban are no better at washing away germs than those without it—and they may actually contribute to allergies, impaired reproduction, hormone disruption, and weakened muscles. Stock up on soaps without these ingredients.',
                'Replace nonstick pans with cast-iron.To create the slick surface of nonstick cookware, manufacturers apply chemicals called fluoropolymers, which are released into the air when you cook at high temperatures, according to the Environmental Working Group.',
                'Replace vinyl shower curtains.Trade the vinyl for PVC-free plastic, cloth, or bamboo. You’ll avoid more than 108 different chemicals vinyl emits into the air, as well as that unpleasant plastic-y odor.',
                'Go for a CFL-only home.Each compact fluorescent lightbulb (CFL) saves you about $6 per year in energy costs, according to Energy Star. And the Environmental Protection Agency (EPA) says CFLs suck up to 75% less energy than incandescent light bulbs and last up to 10 times longer.The Sun contains 99.86% of the mass in the Solar System.',
                'Maximize your freezer space.Keeping your freezer fully stocked is key to saving time, money, and stress when putting together meals, but did you know it’s also the most eco-friendly use of the space? That’s because it takes a lot more energy to cool an empty space, according to the NRDC.',
                'Slash your holiday waste.We produce about 25% more trash between Thanksgiving and New Year’s, so seek out ways to cut back while saving time and money. One idea: Recycle rather than trash your tree (visit earth911.com to find a local treecycling location).',
                'Wrap gifts in last year’s holiday paper, leftover fabric, or newspaper (newspaper will give it a nice vintage flair).',
                'Turn off or unplug holiday lights during the day to save energy and make them last longer.',
                'Skip paper greeting cards and send e-cards.',
                'Dry strategically. Slash clothes dryer energy by up to 40% by pulling out items that are already dry, like dress shirts and t-shirts, sooner.',
                'Be "normal" about your TV.Select the “normal” or “standard” picture setting on your TV. Many flat screens are shipped from the manufacturer with a picture setting that makes it stand out in retail displays, but are brighter than you need at home and consume 10 to 20% more energy (and cash) at this setting, reports the NRDC.',
                'Water plants in the morning or evening. Watering during the day means you’ll lose H20 due to evaporation from the hot sun. Watering early or late also means the moisture will penetrate deeper so you’ll have to use less water.',
                'Pop smarter. Microwave popcorn bags are lined with perfluorooctanoic acid (PFOA)—bad for the air and bad for you (it may contribute to cancer and infertility, studies show). Instead, pop the old-fashioned way in a pan on the stove with a thin layer of canola oil.',
                'Eat grass-fed beef.It’s higher in heart- and brain-healthy omega-3 fatty acids and less likely to carry foodborne illnesses such as E. coli. Plus, raising grass-fed cattle emits significantly less greenhouse gases than producing the corn needed to feed their grain-fed counterparts.',
                'Obey the speed limit.Aggressive driving (speeding, rapid acceleration, and braking) can lower your gas mileage by up to 33%, according to the U.S. Department of Energy. ',
                'Use a vacuum fitted with a HEPA filter.Not only do they capture small particles more efficiently, they’re more likely to remove contaminants and other allergens from the air.',
                'Skip straws.Disposable straws are so unnecessary and just add waste.',
                'Eat local.The food is fresher, which means it contains more nutrients than food that’s taken a trip from half a globe away. Buying locally can also reduce the pollution and energy used from transporting, storing, and refrigerating.',
                'Compost at home.In addition to making fantastic natural fertilizer for your garden, composting takes a major bite out of the nation’s food waste problem, with 25% of the country’s food supply ending up in a landfill.',
                'Take a shorter shower.You’ll help avoid dry skin and cut down on your water and energy bills at the same time. The average daily shower habit adds up to 204 pounds of pollutants being emitted annually for an electric-powered water heater and 94 pounds for a natural gas-fueled water heater, according to the NRDC.',
            ],
            SKILL_NAME: 'Green Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a green fact or idea, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'Skip the sink. Dishwashers use half the energy, one-sixth of the water, and less soap than hand-washing dishes, reports a German study. Just make sure it’s full before you run it: Doing so can save 100 pounds of carbon dioxide and $40 per year, according to the EPA.',
                'Reusable grocery bags help reduce the use of plastic bags at all stores. Remember to keep one handy at all times.',
                'Doing all your laundry in cold water saves energy. In fact, almost 90% of the energy consumed by a washing machine goes to heating the water, according to Energy Star. ',
                'Use natural cleaning products that are more environmental friendly - such as seventh generation, they are bidegradable.',
                'Research shows antimicrobial ingredients triclosan and triclocarban are no better at washing away germs than those without it—and they may actually contribute to allergies, impaired reproduction, hormone disruption, and weakened muscles. Stock up on soaps without these ingredients.',
                'Replace nonstick pans with cast-iron.To create the slick surface of nonstick cookware, manufacturers apply chemicals called fluoropolymers, which are released into the air when you cook at high temperatures, according to the Environmental Working Group.',
                'Replace vinyl shower curtains.Trade the vinyl for PVC-free plastic, cloth, or bamboo. You’ll avoid more than 108 different chemicals vinyl emits into the air, as well as that unpleasant plastic-y odor.',
                'Go for a CFL-only home.Each compact fluorescent lightbulb (CFL) saves you about $6 per year in energy costs, according to Energy Star. And the Environmental Protection Agency (EPA) says CFLs suck up to 75% less energy than incandescent light bulbs and last up to 10 times longer.The Sun contains 99.86% of the mass in the Solar System.',
                'Maximize your freezer space.Keeping your freezer fully stocked is key to saving time, money, and stress when putting together meals, but did you know it’s also the most eco-friendly use of the space? That’s because it takes a lot more energy to cool an empty space, according to the NRDC.',
                'Slash your holiday waste.We produce about 25% more trash between Thanksgiving and New Year’s, so seek out ways to cut back while saving time and money. One idea: Recycle rather than trash your tree (visit earth911.com to find a local treecycling location).',
                'Wrap gifts in last year’s holiday paper, leftover fabric, or newspaper (newspaper will give it a nice vintage flair).',
                'Turn off or unplug holiday lights during the day to save energy and make them last longer.',
                'Skip paper greeting cards and send e-cards.',
                'Dry strategically. Slash clothes dryer energy by up to 40% by pulling out items that are already dry, like dress shirts and t-shirts, sooner.',
                'Be "normal" about your TV.Select the “normal” or “standard” picture setting on your TV. Many flat screens are shipped from the manufacturer with a picture setting that makes it stand out in retail displays, but are brighter than you need at home and consume 10 to 20% more energy (and cash) at this setting, reports the NRDC.',
                'Water plants in the morning or evening. Watering during the day means you’ll lose H20 due to evaporation from the hot sun. Watering early or late also means the moisture will penetrate deeper so you’ll have to use less water.',
                'Pop smarter. Microwave popcorn bags are lined with perfluorooctanoic acid (PFOA)—bad for the air and bad for you (it may contribute to cancer and infertility, studies show). Instead, pop the old-fashioned way in a pan on the stove with a thin layer of canola oil.',
                'Eat grass-fed beef.It’s higher in heart- and brain-healthy omega-3 fatty acids and less likely to carry foodborne illnesses such as E. coli. Plus, raising grass-fed cattle emits significantly less greenhouse gases than producing the corn needed to feed their grain-fed counterparts.',
                'Obey the speed limit.Aggressive driving (speeding, rapid acceleration, and braking) can lower your gas mileage by up to 33%, according to the U.S. Department of Energy. ',
                'Use a vacuum fitted with a HEPA filter.Not only do they capture small particles more efficiently, they’re more likely to remove contaminants and other allergens from the air.',
                'Skip straws.Disposable straws are so unnecessary and just add waste.',
                'Eat local.The food is fresher, which means it contains more nutrients than food that’s taken a trip from half a globe away. Buying locally can also reduce the pollution and energy used from transporting, storing, and refrigerating.',
                'Compost at home.In addition to making fantastic natural fertilizer for your garden, composting takes a major bite out of the nation’s food waste problem, with 25% of the country’s food supply ending up in a landfill.',
                'Take a shorter shower.You’ll help avoid dry skin and cut down on your water and energy bills at the same time. The average daily shower habit adds up to 204 pounds of pollutants being emitted annually for an electric-powered water heater and 94 pounds for a natural gas-fueled water heater, according to the NRDC.',
            ],
            SKILL_NAME: 'Green Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a green fact or idea, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'de-DE': {
        translation: {
            FACTS: [
                'Ein Jahr dauert auf dem Merkur nur 88 Tage.',
                'Die Venus ist zwar weiter von der Sonne entfernt, hat aber höhere Temperaturen als Merkur.',
                'Venus dreht sich entgegen dem Uhrzeigersinn, möglicherweise aufgrund eines früheren Zusammenstoßes mit einem Asteroiden.',
                'Auf dem Mars erscheint die Sonne nur halb so groß wie auf der Erde.',
                'Die Erde ist der einzige Planet, der nicht nach einem Gott benannt ist.',
                'Jupiter hat den kürzesten Tag aller Planeten.',
                'Die Milchstraßengalaxis wird in etwa 5 Milliarden Jahren mit der Andromeda-Galaxis zusammenstoßen.',
                'Die Sonne macht rund 99,86 % der Masse im Sonnensystem aus.',
                'Die Sonne ist eine fast perfekte Kugel.',
                'Eine Sonnenfinsternis kann alle ein bis zwei Jahre eintreten. Sie ist daher ein seltenes Ereignis.',
                'Der Saturn strahlt zweieinhalb mal mehr Energie in den Weltraum aus als er von der Sonne erhält.',
                'Die Temperatur in der Sonne kann 15 Millionen Grad Celsius erreichen.',
                'Der Mond entfernt sich von unserem Planeten etwa 3,8 cm pro Jahr.',
            ],
            SKILL_NAME: 'Weltraumwissen auf Deutsch',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
