/* ============================================================
   PédiatrieQuest — Soins infirmiers pédiatriques
   Moteur cloné de SASIQuest (DEP 5325). 10 compétences thématiques.

   ⚠️⚠️ CONTENU D'AMORÇAGE — À VALIDER PAR UNE PROFESSIONNELLE ⚠️⚠️
   Aucun code de cours ni manuel de référence n'a encore été fourni.
   Le contenu ci-dessous a été rédigé à partir de connaissances
   générales et reconnues en soins infirmiers pédiatriques
   (Société canadienne de pédiatrie, Santé Canada, PIQ du Québec,
   pratiques usuelles en pédiatrie). Il constitue un POINT DE DÉPART.
   Il doit être révisé, corrigé et complété par Jessica Ouellet
   (infirmière/enseignante) AVANT tout usage en salle de classe :
     • matière exacte et découpage réel du cours ;
     • spécialités à couvrir (pédiatrie seule ou autres spécialités) ;
     • normes locales (protocoles du centre, calendrier PIQ à jour,
       valeurs de référence utilisées dans son enseignement).
   Même convention que « EXEMPLES à valider/remplacer par les
   enseignants » dans sasi-web/data.js.

   Format des choix: chaque question a un tableau "choices" où chaque
   item a { fr, en, correct }. L'ordre est mélangé au moment de
   l'affichage (voir app.js) — la position de la bonne réponse change
   donc à chaque tentative.
   ============================================================ */

const PROGRAM = {
  fr: { title: "PédiatrieQuest — Soins infirmiers pédiatriques", subtitle: "Contenu d'amorçage — à valider" },
  en: { title: "PédiatrieQuest — Pediatric Nursing Care", subtitle: "Starter content — to be validated" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes": l'élève touche un terme puis
   sa définition correspondante. pairs: tableau de
   { term_fr, term_en, def_fr, def_en }. Toutes les paires doivent être
   associées correctement pour que la question soit considérée réussie. */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (mise en situation): un court
   scénario réaliste suivi d'un choix multiple basé sur le jugement
   professionnel. Réutilise le même format "choices" qu'un QCM standard. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulté d'une quête. Chaque compétence est divisée en
   3 paliers progressifs (tiers[]), débloqués l'un après l'autre:
   Débutant -> Intermédiaire -> Avancé. Réussir le palier 1 d'une compétence
   déverrouille la compétence suivante sur la carte; réussir le palier 3
   (Avancé) accorde le badge de maîtrise de la compétence. */
const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage.
   ⚠️ Contenu d'amorçage — voir l'avertissement en tête de fichier. */
const COMPETENCIES = [

/* ---------- 1. Croissance et développement ---------- */
{
  id: "croissance", order: 1,
  title_fr: "Croissance & développement", title_en: "Growth & Development",
  icon: "🧒",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "À quel âge le sourire social (réponse au visage d'un adulte) apparaît-il habituellement ?",
          en: "At what age does the social smile (response to an adult's face) usually appear?",
          choices: [ch("Dès la naissance", "From birth"), ch("Vers 6 à 8 semaines", "Around 6 to 8 weeks", true), ch("Vers 4 mois", "Around 4 months"), ch("Vers 6 mois", "Around 6 months")],
          explFr: "Le sourire social apparaît vers 6 à 8 semaines. Son absence à 3 mois justifie une évaluation du développement.",
          explEn: "The social smile appears around 6 to 8 weeks. Its absence at 3 months warrants a developmental assessment."
        },
        {
          fr: "À quel âge l'enfant s'assoit-il généralement seul, sans appui ?",
          en: "At what age does a child usually sit alone, without support?",
          choices: [ch("3 mois", "3 months"), ch("6 à 8 mois", "6 to 8 months", true), ch("12 mois", "12 months"), ch("18 mois", "18 months")],
          explFr: "La position assise sans appui s'acquiert entre 6 et 8 mois, après le contrôle de la tête (vers 4 mois).",
          explEn: "Sitting unsupported is achieved between 6 and 8 months, after head control (around 4 months)."
        },
        {
          type: "tf",
          fr: "Un enfant en santé triple habituellement son poids de naissance vers l'âge de 1 an.",
          en: "A healthy child usually triples their birth weight by 1 year of age.",
          isTrue: true,
          explFr: "Vrai. Le poids double vers 4 à 6 mois et triple vers 12 mois : c'est un repère classique de croissance.",
          explEn: "True. Weight doubles around 4 to 6 months and triples around 12 months: a classic growth landmark."
        },
        {
          fr: "La petite fontanelle POSTÉRIEURE (à l'arrière du crâne) se ferme habituellement vers :",
          en: "The small POSTERIOR fontanelle (at the back of the skull) usually closes around:",
          choices: [ch("2 à 3 mois", "2 to 3 months", true), ch("6 mois", "6 months"), ch("12 à 18 mois", "12 to 18 months"), ch("24 mois", "24 months")],
          explFr: "La fontanelle postérieure se ferme vers 2 à 3 mois ; l'antérieure (la plus grande, sur le dessus de la tête) vers 12 à 18 mois — ne pas confondre les deux.",
          explEn: "The posterior fontanelle closes around 2 to 3 months; the anterior one (the largest, on top of the head) around 12 to 18 months — do not confuse the two."
        },
        {
          type: "tf",
          fr: "La marche autonome apparaît normalement entre 12 et 15 mois chez la majorité des enfants.",
          en: "Independent walking normally appears between 12 and 15 months in most children.",
          isTrue: true,
          explFr: "Vrai. La majorité marche seule entre 12 et 15 mois ; on tolère jusqu'à 18 mois avant de parler de retard.",
          explEn: "True. Most walk alone between 12 and 15 months; up to 18 months is tolerated before speaking of delay."
        },
        {
          fr: "Vers quel âge l'enfant prononce-t-il habituellement ses premiers mots signifiants (« maman », « papa ») ?",
          en: "Around what age does a child usually say their first meaningful words (\"mama\", \"dada\")?",
          choices: [ch("6 mois", "6 months"), ch("12 mois", "12 months", true), ch("18 mois", "18 months"), ch("24 mois", "24 months")],
          explFr: "Vers 12 mois, l'enfant dit habituellement 1 à 3 mots signifiants. Vers 2 ans, il combine deux mots.",
          explEn: "Around 12 months, a child usually says 1 to 3 meaningful words. Around 2 years, they combine two words."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          fr: "La grande fontanelle ANTÉRIEURE (sur le dessus de la tête) — différente de la petite fontanelle postérieure — se ferme habituellement entre :",
          en: "The large ANTERIOR fontanelle (on top of the head) — different from the small posterior fontanelle — usually closes between:",
          choices: [ch("2 et 4 mois", "2 and 4 months"), ch("6 et 9 mois", "6 and 9 months"), ch("12 et 18 mois", "12 and 18 months", true), ch("24 et 36 mois", "24 and 36 months")],
          explFr: "Entre 12 et 18 mois. Une fermeture très précoce ou très tardive doit être signalée au médecin.",
          explEn: "Between 12 and 18 months. Very early or very late closure must be reported to the physician."
        },
        {
          ...match("Associe chaque groupe d'âge à sa définition.", "Match each age group with its definition.", [
            pair("Nouveau-né", "Newborn", "De la naissance à 28 jours", "From birth to 28 days"),
            pair("Nourrisson", "Infant", "De 0 à 12 mois", "From 0 to 12 months"),
            pair("Trottineur", "Toddler", "De 12 à 36 mois", "From 12 to 36 months"),
            pair("Âge préscolaire", "Preschool age", "De 3 ans à 6 ans", "From 3 to 6 years"),
            pair("Âge scolaire", "School age", "De 6 ans à 12 ans", "From 6 to 12 years"),
            pair("Adolescence", "Adolescence", "De 12 ans à 18 ans", "From 12 to 18 years")
          ]),
          explFr: "Les groupes d'âge structurent toute la pédiatrie : normes de signes vitaux, doses, approche relationnelle et enseignement varient d'un groupe à l'autre.",
          explEn: "Age groups structure all of pediatrics: vital sign norms, doses, relational approach and teaching vary from one group to another."
        },
        {
          fr: "Un bébé de 9 mois pleure et se détourne dès qu'une infirmière inconnue s'approche. Comment interpréter ce comportement ?",
          en: "A 9-month-old cries and turns away as soon as an unfamiliar nurse approaches. How should this behaviour be interpreted?",
          choices: [ch("Un signe de retard de développement", "A sign of developmental delay"), ch("L'angoisse de l'étranger, normale à cet âge", "Stranger anxiety, normal at this age", true), ch("Un signe de douleur", "A sign of pain"), ch("Un signe de négligence parentale", "A sign of parental neglect")],
          explFr: "L'angoisse de l'étranger apparaît vers 6 à 8 mois : c'est un signe d'attachement sain. On approche l'enfant lentement, en présence du parent.",
          explEn: "Stranger anxiety appears around 6 to 8 months: it is a sign of healthy attachment. Approach the child slowly, with the parent present."
        },
        {
          type: "tf",
          fr: "Le poids de naissance double habituellement vers l'âge de 4 à 6 mois.",
          en: "Birth weight usually doubles around 4 to 6 months of age.",
          isTrue: true,
          explFr: "Vrai. Doublement vers 4 à 6 mois, triplement vers 12 mois : ces repères servent à dépister un retard de croissance.",
          explEn: "True. Doubling around 4 to 6 months, tripling around 12 months: these landmarks help detect growth faltering."
        },
        {
          fr: "Selon Piaget, l'enfant de 0 à 2 ans se situe au stade :",
          en: "According to Piaget, a child from 0 to 2 years is at which stage?",
          choices: [ch("Sensorimoteur", "Sensorimotor", true), ch("Préopératoire", "Preoperational"), ch("Opératoire concret", "Concrete operational"), ch("Opératoire formel", "Formal operational")],
          explFr: "Stade sensorimoteur (0-2 ans) : l'enfant découvre par ses sens et ses mouvements ; la permanence de l'objet s'installe vers 8-9 mois.",
          explEn: "Sensorimotor stage (0-2 years): the child learns through senses and movement; object permanence develops around 8-9 months."
        },
        {
          type: "tf",
          fr: "À 2 ans, un enfant combine généralement deux mots pour former une courte phrase (« encore lait »).",
          en: "At 2 years old, a child generally combines two words into a short phrase (\"more milk\").",
          isTrue: true,
          explFr: "Vrai. Vers 24 mois : environ 50 mots et des combinaisons de deux mots. Une absence de combinaison à 2 ans justifie un dépistage.",
          explEn: "True. Around 24 months: about 50 words and two-word combinations. No combinations at age 2 warrants screening."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Vous recevez en clinique un bébé de 8 mois qui ne tient pas sa tête de façon stable, ne se retourne pas et ne s'assoit pas avec appui. Les parents disent que « c'est un bébé tranquille ». Quelle est la conduite la plus appropriée ?",
            "You see an 8-month-old in clinic who does not hold their head steadily, does not roll over and does not sit with support. The parents say \"it's just a calm baby\". What is the most appropriate action?",
            [
              ch("Rassurer les parents : chaque enfant va à son rythme", "Reassure the parents: every child goes at their own pace"),
              ch("Documenter les observations et référer sans délai pour une évaluation du développement", "Document the findings and refer promptly for a developmental assessment", true),
              ch("Revoir l'enfant dans six mois", "See the child again in six months"),
              ch("Conseiller de stimuler davantage l'enfant à la maison et ne rien noter au dossier", "Advise more stimulation at home and chart nothing")
            ]),
          explFr: "Un retard moteur global à 8 mois (tête instable, pas de retournement) dépasse la variation normale. On documente objectivement et on réfère : la précocité de l'intervention change le pronostic.",
          explEn: "Global motor delay at 8 months (unsteady head, no rolling) exceeds normal variation. Document objectively and refer: early intervention changes the prognosis."
        },
        {
          ...match("Associe chaque stade psychosocial d'Erikson au groupe d'âge correspondant.", "Match each Erikson psychosocial stage with its age group.", [
            pair("Confiance / méfiance", "Trust vs. mistrust", "Le nourrisson (0-1 an)", "The infant (0-1 year)"),
            pair("Autonomie / honte et doute", "Autonomy vs. shame and doubt", "Le trottineur (1-3 ans)", "The toddler (1-3 years)"),
            pair("Initiative / culpabilité", "Initiative vs. guilt", "L'âge préscolaire (3-5 ans)", "Preschool age (3-5 years)"),
            pair("Travail / infériorité", "Industry vs. inferiority", "L'âge scolaire (6-11 ans)", "School age (6-11 years)")
          ]),
          explFr: "Ces stades guident l'approche : offrir des choix au trottineur (autonomie), valoriser les réussites de l'enfant d'âge scolaire (travail), répondre rapidement aux besoins du nourrisson (confiance).",
          explEn: "These stages guide the approach: offer choices to the toddler (autonomy), acknowledge the school-age child's achievements (industry), respond promptly to the infant's needs (trust)."
        },
        {
          ...scenario(
            "Un enfant de 4 ans, propre depuis un an, recommence à mouiller son lit depuis son hospitalisation. Le père est gêné et le gronde. Quelle intervention infirmière est la plus appropriée ?",
            "A 4-year-old, toilet-trained for a year, has started wetting the bed since being hospitalized. The father is embarrassed and scolds him. Which nursing intervention is most appropriate?",
            [
              ch("Expliquer au père que la régression est une réaction fréquente au stress de l'hospitalisation et qu'il ne faut pas punir", "Explain to the father that regression is a common reaction to the stress of hospitalization and that punishment is not appropriate", true),
              ch("Installer une sonde urinaire pour la nuit", "Insert a urinary catheter for the night"),
              ch("Limiter tous les liquides après le souper", "Restrict all fluids after supper"),
              ch("Appuyer le père dans sa façon de corriger l'enfant", "Support the father in how he is correcting the child")
            ]),
          explFr: "La régression (énurésie, langage de bébé, besoin accru du parent) est une réaction normale et temporaire au stress. On rassure la famille, on évite la punition et on maintient les routines.",
          explEn: "Regression (bedwetting, baby talk, increased need for the parent) is a normal, temporary stress reaction. Reassure the family, avoid punishment and keep routines."
        },
        {
          type: "tf",
          fr: "La perte durable d'habiletés déjà acquises (langage, marche, contact social) chez un jeune enfant doit toujours être signalée et évaluée.",
          en: "The lasting loss of previously acquired skills (speech, walking, social contact) in a young child must always be reported and assessed.",
          isTrue: true,
          explFr: "Vrai. Une régression durable des acquis n'est jamais banale : elle peut révéler un trouble neurologique, métabolique ou du développement et exige une évaluation.",
          explEn: "True. A lasting loss of acquired skills is never trivial: it may reveal a neurological, metabolic or developmental disorder and requires assessment."
        },
        {
          fr: "Jusqu'à quel âge le périmètre crânien est-il mesuré de routine à chaque visite de suivi ?",
          en: "Up to what age is head circumference routinely measured at each follow-up visit?",
          choices: [ch("Jusqu'à 6 mois", "Up to 6 months"), ch("Jusqu'à 12 mois", "Up to 12 months"), ch("Jusqu'à 24 mois", "Up to 24 months", true), ch("Jusqu'à 5 ans", "Up to 5 years")],
          explFr: "Le périmètre crânien est suivi de routine jusqu'à environ 24 mois, sur les courbes de croissance de l'OMS, car la croissance cérébrale est maximale durant cette période.",
          explEn: "Head circumference is routinely tracked up to about 24 months, on WHO growth charts, because brain growth is greatest during that period."
        },
        {
          ...scenario(
            "Un trottineur de 18 mois dit moins de cinq mots, ne pointe pas du doigt et ne réagit pas à son prénom. L'audition n'a jamais été évaluée. Quelle est la meilleure conduite ?",
            "An 18-month-old says fewer than five words, does not point and does not respond to their name. Hearing has never been assessed. What is the best course of action?",
            [
              ch("Attendre l'âge de 3 ans : plusieurs enfants parlent tard", "Wait until age 3: many children are late talkers"),
              ch("Documenter, faire évaluer l'audition et référer en orthophonie / évaluation du développement", "Document, have hearing assessed and refer for speech-language / developmental assessment", true),
              ch("Recommander de couper tout écran et revoir dans un an", "Recommend removing all screens and reassess in a year"),
              ch("Rassurer : l'absence de pointage est normale avant 2 ans", "Reassure: not pointing is normal before age 2")
            ]),
          explFr: "Absence de pointage, peu de mots et non-réaction au prénom à 18 mois sont des drapeaux rouges. On vérifie d'abord l'audition, puis on réfère — sans attendre.",
          explEn: "No pointing, few words and no response to name at 18 months are red flags. Check hearing first, then refer — without waiting."
        }
      ]
    }
  ]
},

/* ---------- 2. Signes vitaux pédiatriques ----------
   ⚠️ id volontairement suffixé « _pedia » : SASIQuest utilise déjà l'id
   "signes_vitaux". Sans ce suffixe, les deux programmes se partageraient la
   même entrée MODULE_INFO dans le tableau de bord enseignant. */
{
  id: "signes_vitaux_pedia", order: 2,
  title_fr: "Signes vitaux pédiatriques", title_en: "Pediatric Vital Signs",
  icon: "🩺",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "Quelle est la fréquence cardiaque normale au repos d'un nouveau-né ?",
          en: "What is the normal resting heart rate of a newborn?",
          choices: [ch("60 à 100 batt./min", "60 to 100 beats/min"), ch("80 à 100 batt./min", "80 to 100 beats/min"), ch("100 à 160 batt./min", "100 to 160 beats/min", true), ch("180 à 220 batt./min", "180 to 220 beats/min")],
          explFr: "Environ 100 à 160 batt./min au repos chez le nouveau-né. La fréquence cardiaque diminue graduellement avec l'âge jusqu'aux valeurs adultes à l'adolescence.",
          explEn: "About 100 to 160 beats/min at rest in the newborn. Heart rate gradually decreases with age until adult values in adolescence."
        },
        {
          fr: "Quelle est la fréquence respiratoire normale d'un nourrisson (1 à 12 mois) ?",
          en: "What is the normal respiratory rate of an infant (1 to 12 months)?",
          choices: [ch("12 à 20 /min", "12 to 20 /min"), ch("20 à 25 /min", "20 to 25 /min"), ch("30 à 60 /min", "30 to 60 /min", true), ch("70 à 90 /min", "70 to 90 /min")],
          explFr: "Environ 30 à 60 respirations/min chez le nourrisson, contre 12 à 20 chez l'adulte. Plus l'enfant est jeune, plus la fréquence est élevée.",
          explEn: "About 30 to 60 breaths/min in infants, versus 12 to 20 in adults. The younger the child, the higher the rate."
        },
        {
          type: "tf",
          fr: "Chez l'enfant de moins de 2 ans, la température rectale est la méthode de référence pour confirmer une fièvre.",
          en: "In children under 2 years, rectal temperature is the reference method to confirm a fever.",
          isTrue: true,
          explFr: "Vrai. La Société canadienne de pédiatrie recommande la voie rectale comme méthode de référence avant 2 ans ; l'axillaire sert au dépistage.",
          explEn: "True. The Canadian Paediatric Society recommends the rectal route as the reference method before age 2; axillary is used for screening."
        },
        {
          fr: "À partir de quelle température rectale parle-t-on de fièvre chez l'enfant ?",
          en: "From what rectal temperature is a child considered febrile?",
          choices: [ch("37,2 °C", "37.2 °C"), ch("37,5 °C", "37.5 °C"), ch("38,0 °C", "38.0 °C", true), ch("39,0 °C", "39.0 °C")],
          explFr: "Une température rectale de 38,0 °C ou plus définit la fièvre. Chez le bébé de moins de 3 mois, cette valeur impose une évaluation médicale immédiate.",
          explEn: "A rectal temperature of 38.0 °C or more defines fever. In an infant under 3 months, this requires immediate medical evaluation."
        },
        {
          type: "tf",
          fr: "La fréquence cardiaque et la fréquence respiratoire normales diminuent à mesure que l'enfant grandit.",
          en: "Normal heart rate and respiratory rate decrease as the child grows.",
          isTrue: true,
          explFr: "Vrai. Les normes pédiatriques dépendent de l'âge : une valeur « normale » chez un nouveau-né serait anormale chez un adolescent.",
          explEn: "True. Pediatric norms depend on age: a value that is normal in a newborn would be abnormal in an adolescent."
        },
        {
          fr: "Comment mesure-t-on correctement la fréquence respiratoire d'un nourrisson ?",
          en: "How is an infant's respiratory rate correctly measured?",
          choices: [ch("Sur 15 secondes, multiplié par 4", "Over 15 seconds, multiplied by 4"), ch("Sur une minute complète, avant de le déranger", "Over a full minute, before disturbing them", true), ch("Sur 30 secondes, pendant les pleurs", "Over 30 seconds, while crying"), ch("Uniquement avec le saturomètre", "With the pulse oximeter only")],
          explFr: "La respiration du nourrisson est irrégulière : on compte une minute complète, idéalement au repos et avant toute manipulation qui ferait pleurer.",
          explEn: "Infant breathing is irregular: count for a full minute, ideally at rest and before any handling that would cause crying."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          ...match("Associe chaque groupe d'âge à sa fréquence cardiaque normale au repos.", "Match each age group with its normal resting heart rate.", [
            pair("Nouveau-né", "Newborn", "100 à 160 batt./min", "100 to 160 beats/min"),
            pair("Nourrisson (1-12 mois)", "Infant (1-12 months)", "100 à 150 batt./min", "100 to 150 beats/min"),
            pair("Enfant d'âge scolaire", "School-age child", "75 à 118 batt./min", "75 to 118 beats/min"),
            pair("Adolescent", "Adolescent", "60 à 100 batt./min", "60 to 100 beats/min")
          ]),
          explFr: "Retenir la tendance : plus l'enfant est jeune, plus la fréquence cardiaque de base est élevée. Toujours interpréter la valeur selon l'âge ET l'état de l'enfant (fièvre, pleurs, douleur).",
          explEn: "Remember the trend: the younger the child, the higher the baseline heart rate. Always interpret the value according to age AND the child's state (fever, crying, pain)."
        },
        {
          fr: "Comment choisir un brassard de tension artérielle adapté à un enfant ?",
          en: "How do you select an appropriate blood pressure cuff for a child?",
          choices: [ch("La chambre gonflable couvre environ 40 % de la circonférence du bras", "The bladder covers about 40 % of the arm circumference", true), ch("On utilise toujours le plus petit brassard disponible", "Always use the smallest cuff available"), ch("On utilise le brassard adulte dès l'âge de 5 ans", "Use an adult cuff from age 5"), ch("La taille du brassard n'influence pas la mesure", "Cuff size does not affect the reading")],
          explFr: "Un brassard trop petit surestime la tension, trop grand la sous-estime. La largeur de la chambre gonflable doit couvrir environ 40 % de la circonférence du bras.",
          explEn: "A cuff that is too small overestimates blood pressure; too large underestimates it. Bladder width should cover about 40 % of arm circumference."
        },
        {
          type: "tf",
          fr: "Le thermomètre tympanique n'est pas recommandé chez l'enfant de moins de 2 ans.",
          en: "Tympanic thermometers are not recommended in children under 2 years old.",
          isTrue: true,
          explFr: "Vrai. Le conduit auditif est étroit et courbé avant 2 ans : la mesure tympanique manque de fiabilité. On privilégie la voie rectale (référence) ou axillaire (dépistage).",
          explEn: "True. The ear canal is narrow and curved before age 2: tympanic readings are unreliable. Prefer rectal (reference) or axillary (screening)."
        },
        {
          fr: "Quelle saturation en oxygène (SpO₂) est attendue chez un enfant en santé à l'air ambiant ?",
          en: "What oxygen saturation (SpO₂) is expected in a healthy child on room air?",
          choices: [ch("85 % ou plus", "85 % or more"), ch("90 % ou plus", "90 % or more"), ch("95 % ou plus", "95 % or more", true), ch("100 % exactement", "Exactly 100 %")],
          explFr: "On attend une SpO₂ d'au moins 95 % à l'air ambiant. Une valeur plus basse s'évalue toujours avec la fréquence respiratoire et le travail respiratoire.",
          explEn: "At least 95 % on room air is expected. A lower value is always assessed together with respiratory rate and work of breathing."
        },
        {
          fr: "Chez l'enfant, quel est le signe le plus PRÉCOCE d'une détérioration de l'état circulatoire ?",
          en: "In a child, what is the EARLIEST sign of circulatory deterioration?",
          choices: [ch("La chute de la tension artérielle", "A drop in blood pressure"), ch("La tachycardie", "Tachycardia", true), ch("La perte de conscience", "Loss of consciousness"), ch("La cyanose des lèvres", "Cyanosis of the lips")],
          explFr: "L'enfant compense longtemps par la tachycardie et la vasoconstriction. L'hypotension est un signe TARDIF : quand elle survient, l'enfant est déjà en choc décompensé.",
          explEn: "Children compensate for a long time with tachycardia and vasoconstriction. Hypotension is a LATE sign: by then the child is already in decompensated shock."
        },
        {
          type: "tf",
          fr: "Une température axillaire élevée chez un nourrisson devrait être confirmée par une mesure rectale.",
          en: "An elevated axillary temperature in an infant should be confirmed by a rectal measurement.",
          isTrue: true,
          explFr: "Vrai. L'axillaire est une méthode de dépistage : si elle est élevée (≥ 37,3 °C), on confirme par la voie rectale avant de conclure à une fièvre.",
          explEn: "True. Axillary is a screening method: if elevated (≥ 37.3 °C), confirm rectally before concluding there is a fever."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Un bébé de 3 mois a une fréquence respiratoire de 68/min, un tirage intercostal marqué et un battement des ailes du nez. Sa SpO₂ est à 91 %. Quelle est votre priorité ?",
            "A 3-month-old has a respiratory rate of 68/min, marked intercostal retractions and nasal flaring. SpO₂ is 91 %. What is your priority?",
            [
              ch("Reprendre les signes vitaux dans une heure", "Recheck vital signs in one hour"),
              ch("Installer l'enfant confortablement, administrer l'oxygène selon l'ordonnance et aviser immédiatement", "Position the infant comfortably, give oxygen as ordered and notify immediately", true),
              ch("Donner un antipyrétique et rassurer les parents", "Give an antipyretic and reassure the parents"),
              ch("Offrir un boire pour calmer l'enfant", "Offer a feed to calm the infant")
            ]),
          explFr: "Tirage, battement des ailes du nez et tachypnée à 68/min chez un nourrisson = détresse respiratoire. L'enfant se fatigue vite : on optimise l'oxygénation et on avise sans délai.",
          explEn: "Retractions, nasal flaring and a rate of 68/min in an infant = respiratory distress. Infants tire quickly: optimize oxygenation and notify without delay."
        },
        {
          ...scenario(
            "Un enfant de 5 ans a une FC à 165/min, une tension artérielle encore normale, des extrémités froides et un temps de remplissage capillaire de 4 secondes. Comment interprétez-vous ce tableau ?",
            "A 5-year-old has a HR of 165/min, still-normal blood pressure, cold extremities and a capillary refill time of 4 seconds. How do you interpret this picture?",
            [
              ch("Un état de choc compensé : l'enfant doit être réévalué et signalé d'urgence", "Compensated shock: the child must be reassessed and escalated urgently", true),
              ch("Une réaction normale à la peur", "A normal reaction to fear"),
              ch("Rien d'inquiétant puisque la tension est normale", "Nothing concerning since blood pressure is normal"),
              ch("Une hypothermie simple à couvrir avec une couverture", "Simple hypothermia to cover with a blanket")
            ]),
          explFr: "Tachycardie + remplissage capillaire > 3 s + extrémités froides avec TA normale = choc compensé. C'est une urgence : l'hypotension surviendrait trop tard.",
          explEn: "Tachycardia + capillary refill > 3 s + cold extremities with normal BP = compensated shock. This is an emergency: hypotension would come too late."
        },
        {
          fr: "Chez un nourrisson, une bradycardie (FC sous 80-100/min) doit d'abord faire suspecter :",
          en: "In an infant, bradycardia (HR below 80-100/min) should first raise suspicion of:",
          choices: [ch("Une hypoxie", "Hypoxia", true), ch("Un excellent conditionnement physique", "Excellent physical conditioning"), ch("Une fièvre", "Fever"), ch("De la douleur", "Pain")],
          explFr: "Chez le nourrisson, la bradycardie est presque toujours secondaire à l'hypoxie et annonce l'arrêt cardiaque. La réponse : oxygéner et ventiler.",
          explEn: "In infants, bradycardia is almost always secondary to hypoxia and heralds cardiac arrest. The response: oxygenate and ventilate."
        },
        {
          type: "tf",
          fr: "Une tension artérielle normale permet d'exclure un état de choc chez l'enfant.",
          en: "A normal blood pressure rules out shock in a child.",
          isTrue: false,
          explFr: "Faux. L'enfant maintient longtemps sa tension artérielle. Le choc se dépiste par la fréquence cardiaque, la perfusion périphérique, l'état de conscience et la diurèse.",
          explEn: "False. Children maintain blood pressure for a long time. Shock is detected through heart rate, peripheral perfusion, level of consciousness and urine output."
        },
        {
          ...match("Associe chaque terme à sa définition.", "Match each term with its definition.", [
            pair("Tachypnée", "Tachypnea", "Fréquence respiratoire plus élevée que la normale pour l'âge", "Respiratory rate higher than normal for age"),
            pair("Tirage", "Retractions", "Creusement des espaces entre les côtes à l'inspiration", "Inward pulling of the spaces between the ribs on inspiration"),
            pair("Geignement expiratoire", "Grunting", "Bruit à l'expiration servant à garder les alvéoles ouvertes", "Expiratory sound used to keep alveoli open"),
            pair("Remplissage capillaire", "Capillary refill", "Temps de retour de la coloration après pression sur la peau", "Time for colour to return after pressing on the skin")
          ]),
          explFr: "Ces quatre repères sont le cœur de l'évaluation respiratoire et circulatoire pédiatrique : ils s'observent avant même de toucher l'enfant.",
          explEn: "These four markers are the core of pediatric respiratory and circulatory assessment: they can be observed before even touching the child."
        },
        {
          fr: "Dans quelle situation la prise de température rectale est-elle à éviter ?",
          en: "In which situation should rectal temperature measurement be avoided?",
          choices: [ch("Chez un enfant immunosupprimé ou neutropénique", "In an immunosuppressed or neutropenic child", true), ch("Chez tout enfant de moins de 6 mois", "In any child under 6 months"), ch("Chez un enfant fiévreux", "In a febrile child"), ch("Chez un enfant qui pleure", "In a crying child")],
          explFr: "On évite la voie rectale en cas de neutropénie, d'immunosuppression, de diarrhée importante ou de chirurgie rectale, à cause du risque de lésion et d'infection.",
          explEn: "Avoid the rectal route with neutropenia, immunosuppression, significant diarrhea or rectal surgery, because of the risk of injury and infection."
        }
      ]
    }
  ]
},
/* ---------- 3. Soins du nouveau-né et du nourrisson ---------- */
{
  id: "nouveau_ne", order: 3,
  title_fr: "Nouveau-né & nourrisson", title_en: "Newborn & Infant Care",
  icon: "👶",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "À quels moments l'indice d'Apgar est-il évalué chez le nouveau-né ?",
          en: "At what times is the Apgar score assessed in the newborn?",
          choices: [ch("À 1, 5 et 10 minutes de vie", "At 1, 5 and 10 minutes of life", true), ch("À 15 et 30 minutes de vie", "At 15 and 30 minutes of life"), ch("À 1 heure et à 24 heures", "At 1 hour and 24 hours"), ch("Uniquement à la naissance", "At birth only")],
          explFr: "L'Apgar est coté à 1, 5 et 10 minutes de vie. Il évalue l'adaptation du nouveau-né à la vie extra-utérine.",
          explEn: "Apgar is scored at 1, 5 and 10 minutes of life. It assesses the newborn's transition to extrauterine life."
        },
        {
          fr: "Combien de critères l'indice d'Apgar comporte-t-il ?",
          en: "How many criteria does the Apgar score include?",
          choices: [ch("3", "3"), ch("5", "5", true), ch("7", "7"), ch("10", "10")],
          explFr: "Cinq critères cotés de 0 à 2 : fréquence cardiaque, effort respiratoire, tonus musculaire, réactivité aux stimuli et coloration. Total sur 10.",
          explEn: "Five criteria scored 0 to 2: heart rate, respiratory effort, muscle tone, reflex response and colour. Total out of 10."
        },
        {
          type: "tf",
          fr: "On recommande de coucher le nouveau-né sur le dos pour dormir.",
          en: "Newborns should be placed on their back to sleep.",
          isTrue: true,
          explFr: "Vrai. Le sommeil sur le dos, sur une surface ferme, sans oreiller ni douillette ni contour de lit, réduit le risque de mort subite du nourrisson.",
          explEn: "True. Back sleeping on a firm surface, with no pillow, duvet or bumper pads, reduces the risk of sudden infant death."
        },
        {
          fr: "Quel médicament est administré par voie intramusculaire à tous les nouveau-nés à la naissance, notamment pour prévenir l'hémorragie cérébrale ?",
          en: "Which medication is given intramuscularly to all newborns at birth, in part to prevent cerebral hemorrhage?",
          choices: [ch("La vitamine K", "Vitamin K", true), ch("La vitamine D", "Vitamin D"), ch("Un antibiotique à large spectre", "A broad-spectrum antibiotic"), ch("De l'acétaminophène", "Acetaminophen")],
          explFr: "La vitamine K IM prévient la maladie hémorragique du nouveau-né, dont l'hémorragie cérébrale est la complication la plus grave. La vitamine D, elle, se donne par la bouche, chaque jour, au bébé allaité.",
          explEn: "IM vitamin K prevents hemorrhagic disease of the newborn, of which cerebral hemorrhage is the most serious complication. Vitamin D, in contrast, is given orally every day to the breastfed infant."
        },
        {
          type: "tf",
          fr: "Le moignon du cordon ombilical doit être gardé propre et sec jusqu'à sa chute.",
          en: "The umbilical cord stump must be kept clean and dry until it falls off.",
          isTrue: true,
          explFr: "Vrai. On le garde propre, sec et à l'air (couche repliée sous le cordon). Il tombe habituellement entre 7 et 14 jours.",
          explEn: "True. Keep it clean, dry and exposed to air (diaper folded below the cord). It usually falls off between 7 and 14 days."
        },
        {
          fr: "Une perte de poids est normale dans les premiers jours de vie jusqu'à environ :",
          en: "Weight loss is normal in the first days of life up to about:",
          choices: [ch("2 % du poids de naissance", "2 % of birth weight"), ch("7 à 10 % du poids de naissance", "7 to 10 % of birth weight", true), ch("15 % du poids de naissance", "15 % of birth weight"), ch("20 % du poids de naissance", "20 % of birth weight")],
          explFr: "Une perte de 7 à 10 % est physiologique, avec retour au poids de naissance vers 10 à 14 jours. Au-delà de 10 %, on évalue l'alimentation et l'hydratation.",
          explEn: "A 7 to 10 % loss is physiological, with return to birth weight by 10 to 14 days. Beyond 10 %, assess feeding and hydration."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          ...match("Associe chaque réflexe primitif du nouveau-né à sa description.", "Match each newborn primitive reflex with its description.", [
            pair("Réflexe de Moro", "Moro reflex", "Extension puis flexion des bras lors d'une sensation de chute", "Arms extend then flex in response to a sensation of falling"),
            pair("Réflexe des points cardinaux", "Rooting reflex", "Le bébé tourne la tête vers la joue qu'on effleure", "The baby turns the head toward a stroked cheek"),
            pair("Réflexe d'agrippement palmaire", "Palmar grasp reflex", "Les doigts se referment sur un objet placé dans la paume", "Fingers close around an object placed in the palm"),
            pair("Réflexe de la marche automatique", "Stepping reflex", "Le bébé soulevé, pieds sur une surface, esquisse des pas", "Held upright with feet on a surface, the baby makes stepping motions")
          ]),
          explFr: "Ces réflexes témoignent de l'intégrité neurologique. Leur absence — ou leur persistance au-delà de l'âge attendu — doit être signalée.",
          explEn: "These reflexes reflect neurological integrity. Their absence — or persistence beyond the expected age — must be reported."
        },
        {
          fr: "Un ictère (jaunisse) apparu dans les 24 premières heures de vie est :",
          en: "Jaundice appearing within the first 24 hours of life is:",
          choices: [ch("Toujours physiologique", "Always physiological"), ch("Pathologique jusqu'à preuve du contraire et à signaler", "Pathological until proven otherwise and must be reported", true), ch("Sans importance si le bébé boit bien", "Unimportant if the baby feeds well"), ch("Un signe de bonne adaptation hépatique", "A sign of good liver adaptation")],
          explFr: "L'ictère physiologique apparaît APRÈS 24 heures. Avant 24 heures, il faut suspecter une cause pathologique (incompatibilité, hémolyse, infection) et le signaler sans délai.",
          explEn: "Physiological jaundice appears AFTER 24 hours. Before 24 hours, suspect a pathological cause (incompatibility, hemolysis, infection) and report immediately."
        },
        {
          type: "tf",
          fr: "Le partage de chambre (sans partage du lit) avec les parents est recommandé durant les premiers mois de vie.",
          en: "Room-sharing (without bed-sharing) with parents is recommended during the first months of life.",
          isTrue: true,
          explFr: "Vrai. Le bébé dort dans SON lit, dans la chambre des parents, idéalement les 6 premiers mois. Le partage du lit augmente le risque de suffocation.",
          explEn: "True. The baby sleeps in THEIR own bed, in the parents' room, ideally for the first 6 months. Bed-sharing increases the risk of suffocation."
        },
        {
          fr: "Combien de couches mouillées par jour indiquent une hydratation adéquate chez un nourrisson de plus d'une semaine ?",
          en: "How many wet diapers per day indicate adequate hydration in an infant over one week old?",
          choices: [ch("1 à 2", "1 to 2"), ch("3 à 4", "3 to 4"), ch("6 et plus", "6 or more", true), ch("Le nombre n'a pas d'importance", "The number does not matter")],
          explFr: "Six couches bien mouillées ou plus par 24 heures témoignent d'un apport suffisant. Une diminution marquée est un signe précoce de déshydratation.",
          explEn: "Six or more well-soaked diapers per 24 hours indicate sufficient intake. A marked decrease is an early sign of dehydration."
        },
        {
          fr: "Chez le nouveau-né, quelle est la principale raison de surveiller étroitement la température corporelle ?",
          en: "In the newborn, what is the main reason for closely monitoring body temperature?",
          choices: [ch("Il perd rapidement sa chaleur et régule mal sa température", "They lose heat quickly and regulate temperature poorly", true), ch("Il transpire beaucoup", "They sweat a great deal"), ch("Sa température normale est plus élevée que celle de l'adulte", "Their normal temperature is higher than an adult's"), ch("Le frisson le réchauffe efficacement", "Shivering warms them effectively")],
          explFr: "Grande surface corporelle, peu de gras sous-cutané et absence de frisson : le nouveau-né se refroidit vite. L'hypothermie augmente la consommation d'oxygène et le risque d'hypoglycémie.",
          explEn: "Large body surface, little subcutaneous fat and no shivering: newborns cool quickly. Hypothermia increases oxygen consumption and the risk of hypoglycemia."
        },
        {
          type: "tf",
          fr: "Au Québec, le dépistage néonatal se fait par un prélèvement sanguin au talon, complété par un prélèvement d'urine.",
          en: "In Quebec, newborn screening is done through a heel blood sample, completed by a urine sample.",
          isTrue: true,
          explFr: "Vrai. Le Québec combine un dépistage sanguin (au talon, vers 24-48 h) et un dépistage urinaire, particularité de son programme. ⚠️ À confirmer selon le protocole en vigueur.",
          explEn: "True. Quebec combines blood screening (heel prick, around 24-48 h) with urine screening, a distinctive feature of its program. ⚠️ To be confirmed against the current protocol."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Un bébé de 6 semaines est amené à l'urgence avec une température rectale de 38,4 °C. Il boit moins, mais paraît éveillé. Quelle est la conduite attendue ?",
            "A 6-week-old is brought to the emergency department with a rectal temperature of 38.4 °C. Feeding is reduced but the baby looks alert. What is the expected course of action?",
            [
              ch("Donner de l'acétaminophène et retourner à la maison avec un suivi dans 48 h", "Give acetaminophen and go home with follow-up in 48 h"),
              ch("Traiter comme une urgence : évaluation médicale immédiate et bilan septique", "Treat as an emergency: immediate medical assessment and septic workup", true),
              ch("Découvrir le bébé et reprendre la température dans 2 heures", "Undress the baby and recheck the temperature in 2 hours"),
              ch("Rassurer : une fièvre isolée est bénigne à cet âge", "Reassure: isolated fever is benign at this age")
            ]),
          explFr: "Toute fièvre ≥ 38,0 °C chez un bébé de moins de 3 mois est une urgence : son système immunitaire immature peut masquer une infection grave (méningite, bactériémie, infection urinaire).",
          explEn: "Any fever ≥ 38.0 °C in an infant under 3 months is an emergency: an immature immune system can mask serious infection (meningitis, bacteremia, urinary tract infection)."
        },
        {
          ...scenario(
            "Une mère épuisée confie : « Quand il hurle la nuit et que rien ne marche, j'ai envie de le secouer pour qu'il arrête. » Quelle est la meilleure réponse infirmière ?",
            "An exhausted mother says: \"When he screams at night and nothing works, I feel like shaking him to make it stop.\" What is the best nursing response?",
            [
              ch("Accueillir sans juger, expliquer le danger du secouement et enseigner un plan de sécurité (déposer le bébé en sécurité, sortir de la pièce, demander de l'aide)", "Listen without judging, explain the danger of shaking and teach a safety plan (put the baby down safely, leave the room, ask for help)", true),
              ch("La rassurer en disant que tous les parents font cela", "Reassure her that all parents do this"),
              ch("Signaler immédiatement la mère sans lui parler", "Report the mother immediately without speaking to her"),
              ch("Lui conseiller de laisser pleurer le bébé toute la nuit", "Advise her to let the baby cry all night")
            ]),
          explFr: "Cette confidence est une occasion de prévention du traumatisme crânien non accidentel (bébé secoué). On normalise l'épuisement, on enseigne la stratégie « déposer, s'éloigner, demander de l'aide » et on assure un suivi.",
          explEn: "This disclosure is an opportunity to prevent abusive head trauma (shaken baby). Normalize the exhaustion, teach the \"put down, step away, get help\" strategy and ensure follow-up."
        },
        {
          fr: "Quel signe justifie une consultation URGENTE chez un nouveau-né ?",
          en: "Which sign warrants URGENT consultation in a newborn?",
          choices: [ch("Une fontanelle antérieure bombée et tendue au repos", "A bulging, tense anterior fontanelle at rest", true), ch("Des éternuements fréquents", "Frequent sneezing"), ch("Des selles jaunes et grumeleuses chez un bébé allaité", "Yellow, seedy stools in a breastfed baby"), ch("Un hoquet après le boire", "Hiccups after a feed")],
          explFr: "Une fontanelle bombée au repos évoque une hypertension intracrânienne (méningite, hydrocéphalie). Une fontanelle creuse, elle, évoque une déshydratation.",
          explEn: "A bulging fontanelle at rest suggests raised intracranial pressure (meningitis, hydrocephalus). A sunken fontanelle suggests dehydration."
        },
        {
          type: "tf",
          fr: "Une respiration périodique avec de courtes pauses de moins de 15 secondes, sans changement de coloration, peut être normale chez le nouveau-né.",
          en: "Periodic breathing with short pauses of less than 15 seconds, without colour change, can be normal in the newborn.",
          isTrue: true,
          explFr: "Vrai. Des pauses de moins de 15 secondes sans cyanose ni bradycardie sont physiologiques. Au-delà de 20 secondes, ou avec cyanose/bradycardie, il s'agit d'une apnée à signaler.",
          explEn: "True. Pauses under 15 seconds without cyanosis or bradycardia are physiological. Beyond 20 seconds, or with cyanosis/bradycardia, it is apnea and must be reported."
        },
        {
          ...match("Associe chaque observation chez le nouveau-né à son interprétation.", "Match each newborn finding with its interpretation.", [
            pair("Ictère après 24 heures de vie", "Jaundice after 24 hours of life", "Habituellement physiologique, à surveiller", "Usually physiological, to be monitored"),
            pair("Fontanelle creuse", "Sunken fontanelle", "Signe de déshydratation", "Sign of dehydration"),
            pair("Cyanose centrale (lèvres, langue)", "Central cyanosis (lips, tongue)", "Urgence : oxygénation insuffisante", "Emergency: inadequate oxygenation"),
            pair("Cyanose des mains et des pieds le 1er jour", "Blue hands and feet on day 1", "Acrocyanose, normale les premiers jours", "Acrocyanosis, normal in the first days")
          ]),
          explFr: "Distinguer l'acrocyanose (extrémités, bénigne) de la cyanose centrale (lèvres et muqueuses, urgente) est une compétence de base en pouponnière.",
          explEn: "Distinguishing acrocyanosis (extremities, benign) from central cyanosis (lips and mucous membranes, urgent) is a core newborn nursery skill."
        },
        {
          fr: "Un bébé allaité exclusivement doit recevoir chaque jour un supplément de :",
          en: "An exclusively breastfed baby must receive a daily supplement of:",
          choices: [ch("Vitamine D 400 UI", "Vitamin D 400 IU", true), ch("Fer par voie orale", "Oral iron"), ch("Vitamine C", "Vitamin C"), ch("Calcium", "Calcium")],
          explFr: "Au Canada, on recommande 400 UI de vitamine D par jour au nourrisson allaité, jusqu'à ce que son alimentation en fournisse assez.",
          explEn: "In Canada, 400 IU of vitamin D daily is recommended for breastfed infants, until their diet provides enough."
        }
      ]
    }
  ]
},

/* ---------- 4. Maladies infantiles courantes et fièvre ---------- */
{
  id: "maladies", order: 4,
  title_fr: "Maladies courantes & fièvre", title_en: "Common Illnesses & Fever",
  icon: "🤒",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "Quel virus est le plus souvent en cause dans la bronchiolite du nourrisson ?",
          en: "Which virus most often causes bronchiolitis in infants?",
          choices: [ch("Le virus respiratoire syncytial (VRS)", "Respiratory syncytial virus (RSV)", true), ch("Le rotavirus", "Rotavirus"), ch("Le virus de la varicelle", "Varicella virus"), ch("Le parvovirus B19", "Parvovirus B19")],
          explFr: "Le VRS cause la majorité des bronchiolites, surtout chez les moins de 2 ans, en saison froide. Le traitement est surtout de soutien : hydratation, dégagement nasal, oxygène au besoin.",
          explEn: "RSV causes most bronchiolitis, mainly under age 2, in the cold season. Treatment is mostly supportive: hydration, nasal clearing, oxygen as needed."
        },
        {
          type: "tf",
          fr: "On ne doit jamais donner d'acide acétylsalicylique (aspirine) à un enfant fiévreux.",
          en: "Acetylsalicylic acid (aspirin) must never be given to a febrile child.",
          isTrue: true,
          explFr: "Vrai. L'AAS est associé au syndrome de Reye (atteinte hépatique et cérébrale grave). On utilise l'acétaminophène ou l'ibuprofène.",
          explEn: "True. ASA is linked to Reye syndrome (severe liver and brain injury). Use acetaminophen or ibuprofen instead."
        },
        {
          fr: "Quelle est la toux caractéristique du croup (laryngotrachéite) ?",
          en: "What cough is characteristic of croup (laryngotracheitis)?",
          choices: [ch("Une toux aboyante, avec voix rauque", "A barking cough, with hoarse voice", true), ch("Une toux grasse et productive", "A wet, productive cough"), ch("Une toux sèche seulement le jour", "A dry cough only during the day"), ch("Aucune toux", "No cough at all")],
          explFr: "Le croup donne une toux aboyante (« phoque »), une voix rauque et parfois un stridor, souvent la nuit. Le calme de l'enfant est essentiel : les pleurs aggravent l'obstruction.",
          explEn: "Croup produces a barking (\"seal-like\") cough, hoarseness and sometimes stridor, often at night. Keeping the child calm is essential: crying worsens the obstruction."
        },
        {
          fr: "Quel est le traitement de première intention d'une gastroentérite légère chez l'enfant ?",
          en: "What is the first-line treatment for mild gastroenteritis in a child?",
          choices: [ch("Une solution de réhydratation orale, en petites quantités fréquentes", "Oral rehydration solution, in small frequent amounts", true), ch("Un antibiotique", "An antibiotic"), ch("Un jeûne de 24 heures", "A 24-hour fast"), ch("Des jus sucrés à volonté", "Sweet juices as desired")],
          explFr: "La réhydratation orale est la pierre angulaire. Les jus sucrés aggravent la diarrhée ; le jeûne prolongé n'est plus recommandé.",
          explEn: "Oral rehydration is the cornerstone. Sugary juices worsen diarrhea; prolonged fasting is no longer recommended."
        },
        {
          type: "tf",
          fr: "La fièvre est une réaction de défense de l'organisme et ne cause pas, par elle-même, de dommage cérébral.",
          en: "Fever is a defence reaction of the body and does not, in itself, cause brain damage.",
          isTrue: true,
          explFr: "Vrai. On traite l'inconfort de l'enfant, pas le chiffre du thermomètre. Le message aux parents vise à réduire la « phobie de la fièvre ».",
          explEn: "True. Treat the child's discomfort, not the number on the thermometer. The message to parents aims to reduce \"fever phobia\"."
        },
        {
          fr: "Quel signe accompagne typiquement l'otite moyenne aiguë chez un jeune enfant ?",
          en: "Which sign typically accompanies acute otitis media in a young child?",
          choices: [ch("Il tire sur son oreille, est irritable et dort mal", "Pulling at the ear, irritability and poor sleep", true), ch("Une éruption en papier de verre", "A sandpaper-like rash"), ch("Une toux aboyante", "A barking cough"), ch("Des selles noires", "Black stools")],
          explFr: "Avant l'âge de parler, l'enfant exprime la douleur d'oreille en la tirant, en pleurant, en mangeant et dormant mal, souvent après un rhume.",
          explEn: "Before they can speak, children express ear pain by tugging at the ear, crying, and feeding and sleeping poorly, often after a cold."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          ...match("Associe chaque maladie infantile à son signe caractéristique.", "Match each childhood illness with its characteristic sign.", [
            pair("Roséole", "Roseola", "Fièvre élevée 3 à 5 jours, puis éruption quand la fièvre tombe", "High fever for 3 to 5 days, then rash as the fever breaks"),
            pair("Cinquième maladie", "Fifth disease", "Joues rouges « giflées », puis éruption en dentelle", "Red \"slapped\" cheeks, then lacy rash"),
            pair("Scarlatine", "Scarlet fever", "Éruption rugueuse comme du papier sablé et langue framboisée", "Sandpaper-like rash and strawberry tongue"),
            pair("Varicelle", "Chickenpox", "Lésions d'âges différents : macules, vésicules et croûtes", "Lesions of different ages: macules, vesicles and crusts")
          ]),
          explFr: "Reconnaître l'éruption oriente l'isolement et l'enseignement aux parents. La scarlatine, d'origine streptococcique, exige un antibiotique — les autres sont virales.",
          explEn: "Recognizing the rash guides isolation and parent teaching. Scarlet fever, of streptococcal origin, requires an antibiotic — the others are viral."
        },
        {
          fr: "À partir de quel âge l'ibuprofène peut-il généralement être utilisé chez l'enfant ?",
          en: "From what age can ibuprofen generally be used in children?",
          choices: [ch("Dès la naissance", "From birth"), ch("À partir de 6 mois", "From 6 months", true), ch("À partir de 2 ans", "From 2 years"), ch("À partir de 5 ans", "From 5 years")],
          explFr: "L'ibuprofène s'utilise généralement à partir de 6 mois, et jamais chez un enfant déshydraté (risque rénal). L'acétaminophène demeure le choix avant cet âge.",
          explEn: "Ibuprofen is generally used from 6 months of age, and never in a dehydrated child (kidney risk). Acetaminophen remains the choice before that age."
        },
        {
          type: "tf",
          fr: "Les convulsions fébriles simples surviennent surtout entre 6 mois et 5 ans et n'entraînent habituellement pas de séquelles.",
          en: "Simple febrile seizures occur mainly between 6 months and 5 years and usually leave no sequelae.",
          isTrue: true,
          explFr: "Vrai. Elles sont effrayantes mais bénignes. On protège l'enfant, on le place en position latérale, on note la durée et on ne met rien dans sa bouche.",
          explEn: "True. They are frightening but benign. Protect the child, place them on their side, time the seizure and put nothing in the mouth."
        },
        {
          fr: "Quels signes évoquent une déshydratation chez un jeune enfant atteint de gastroentérite ?",
          en: "Which signs suggest dehydration in a young child with gastroenteritis?",
          choices: [ch("Absence de larmes, muqueuses sèches et diminution des couches mouillées", "No tears, dry mucous membranes and fewer wet diapers", true), ch("Peau moite et pouls lent", "Moist skin and slow pulse"), ch("Augmentation de l'appétit", "Increased appetite"), ch("Fontanelle bombée", "Bulging fontanelle")],
          explFr: "Absence de larmes, bouche sèche, yeux et fontanelle creux, moins de couches mouillées, léthargie : ce sont les repères cliniques de la déshydratation.",
          explEn: "No tears, dry mouth, sunken eyes and fontanelle, fewer wet diapers, lethargy: these are the clinical markers of dehydration."
        },
        {
          fr: "Quelle mesure NON pharmacologique est appropriée chez un enfant fiévreux ?",
          en: "Which NON-pharmacological measure is appropriate for a febrile child?",
          choices: [ch("L'habiller légèrement et offrir des liquides fréquemment", "Dress them lightly and offer fluids frequently", true), ch("Le frictionner à l'alcool", "Rub them with rubbing alcohol"), ch("Le plonger dans un bain d'eau froide", "Immerse them in a cold bath"), ch("L'emmitoufler dans des couvertures", "Bundle them in blankets")],
          explFr: "Vêtements légers, pièce tempérée et hydratation suffisent. L'alcool (toxique par absorption) et l'eau froide (frissons, vasoconstriction) sont proscrits.",
          explEn: "Light clothing, a temperate room and hydration are enough. Alcohol (toxic by absorption) and cold water (shivering, vasoconstriction) are prohibited."
        },
        {
          type: "tf",
          fr: "La majorité des otites et des infections respiratoires de l'enfant sont d'origine virale et ne nécessitent pas d'antibiotique.",
          en: "Most ear and respiratory infections in children are viral and do not require antibiotics.",
          isTrue: true,
          explFr: "Vrai. L'usage prudent des antibiotiques fait partie de l'enseignement aux familles : rhume, bronchiolite et plusieurs otites guérissent sans antibiotique.",
          explEn: "True. Prudent antibiotic use is part of family teaching: colds, bronchiolitis and many ear infections resolve without antibiotics."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Un enfant de 2 ans fiévreux depuis deux jours devient somnolent, difficile à réveiller, et présente de petites taches pourpres qui ne blanchissent pas à la pression. Que faites-vous ?",
            "A 2-year-old, febrile for two days, becomes drowsy, difficult to rouse, and shows small purple spots that do not blanch under pressure. What do you do?",
            [
              ch("Administrer un antipyrétique et réévaluer dans une heure", "Give an antipyretic and reassess in one hour"),
              ch("Considérer une urgence vitale (purpura fébrile, méningococcémie) et déclencher immédiatement la prise en charge", "Treat as a life-threatening emergency (febrile purpura, meningococcemia) and escalate immediately", true),
              ch("Appliquer une compresse froide sur l'éruption", "Apply a cold compress to the rash"),
              ch("Demander aux parents de revenir demain", "Ask the parents to come back tomorrow")
            ]),
          explFr: "Fièvre + purpura qui ne blanchit pas + altération de l'état de conscience = méningococcémie jusqu'à preuve du contraire. Chaque minute compte.",
          explEn: "Fever + non-blanching purpura + altered level of consciousness = meningococcemia until proven otherwise. Every minute counts."
        },
        {
          ...scenario(
            "Une mère vous dit qu'elle alterne acétaminophène et ibuprofène toutes les deux heures depuis hier pour « faire tomber la fièvre à tout prix ». Quelle intervention privilégiez-vous ?",
            "A mother tells you she has been alternating acetaminophen and ibuprofen every two hours since yesterday to \"bring the fever down at all costs\". Which intervention do you prioritize?",
            [
              ch("Reprendre l'enseignement : traiter l'inconfort, respecter les doses et les intervalles, et noter les heures d'administration", "Re-teach: treat discomfort, respect doses and intervals, and write down administration times", true),
              ch("L'encourager à poursuivre l'alternance aux deux heures", "Encourage her to keep alternating every two hours"),
              ch("Lui conseiller de doubler la dose d'acétaminophène", "Advise doubling the acetaminophen dose"),
              ch("Ne rien dire : c'est la décision du parent", "Say nothing: it is the parent's decision")
            ]),
          explFr: "L'alternance rapprochée multiplie les risques d'erreur et de surdosage. On enseigne : traiter l'inconfort, un seul produit à la fois quand c'est possible, respecter les intervalles et tenir un registre écrit.",
          explEn: "Frequent alternation multiplies the risk of error and overdose. Teach: treat discomfort, one product at a time when possible, respect intervals and keep a written log."
        },
        {
          fr: "Un enfant de 3 ans présente un stridor AU REPOS, un tirage marqué et de l'agitation. Que signifie ce tableau ?",
          en: "A 3-year-old has stridor AT REST, marked retractions and agitation. What does this picture mean?",
          choices: [ch("Un croup sévère nécessitant une prise en charge urgente", "Severe croup requiring urgent management", true), ch("Un croup léger à traiter à la maison", "Mild croup to be managed at home"), ch("Une réaction normale aux pleurs", "A normal reaction to crying"), ch("Une otite moyenne", "Otitis media")],
          explFr: "Le stridor au repos signe une obstruction significative des voies respiratoires supérieures. On garde l'enfant calme, dans les bras du parent, et on obtient une évaluation médicale immédiate.",
          explEn: "Stridor at rest indicates significant upper airway obstruction. Keep the child calm, in the parent's arms, and obtain immediate medical assessment."
        },
        {
          type: "tf",
          fr: "Un enfant qui bave abondamment, refuse d'avaler et se tient penché vers l'avant en position du trépied ne doit pas subir d'examen de la gorge avec un abaisse-langue.",
          en: "A child who drools heavily, refuses to swallow and sits leaning forward in the tripod position must not have their throat examined with a tongue depressor.",
          isTrue: true,
          explFr: "Vrai. Ce tableau évoque une épiglottite : toute manipulation de la gorge peut provoquer un spasme et une obstruction complète. On garde l'enfant calme et on appelle à l'aide.",
          explEn: "True. This picture suggests epiglottitis: any throat manipulation can trigger spasm and complete obstruction. Keep the child calm and call for help."
        },
        {
          ...match("Associe chaque situation à la conduite attendue.", "Match each situation with the expected action.", [
            pair("Fièvre chez un bébé de moins de 3 mois", "Fever in a baby under 3 months", "Évaluation médicale immédiate", "Immediate medical evaluation"),
            pair("Convulsion fébrile en cours", "Ongoing febrile seizure", "Protéger l'enfant, position latérale, noter la durée", "Protect the child, side-lying position, time the seizure"),
            pair("Gastroentérite avec déshydratation légère", "Gastroenteritis with mild dehydration", "Réhydratation orale fractionnée", "Small, frequent oral rehydration"),
            pair("Varicelle chez un enfant qui se gratte", "Chickenpox in an itchy child", "Ongles courts, bains apaisants, éviter l'AAS", "Short nails, soothing baths, avoid ASA")
          ]),
          explFr: "Chaque situation courante a une conduite claire ; l'erreur classique est de banaliser la fièvre du très jeune nourrisson.",
          explEn: "Each common situation has a clear course of action; the classic error is downplaying fever in the very young infant."
        },
        {
          fr: "Quel élément d'enseignement est prioritaire au congé d'un enfant atteint de bronchiolite ?",
          en: "Which teaching point is the priority at discharge for a child with bronchiolitis?",
          choices: [ch("Reconnaître les signes de détresse respiratoire et de déshydratation, et quand reconsulter", "Recognizing signs of respiratory distress and dehydration, and when to return", true), ch("Donner un antibiotique dès l'apparition de la fièvre", "Give an antibiotic as soon as fever appears"), ch("Utiliser un sirop contre la toux en vente libre", "Use an over-the-counter cough syrup"), ch("Coucher le bébé sur le ventre pour mieux respirer", "Place the baby on their stomach to breathe better")],
          explFr: "La bronchiolite peut s'aggraver au 3e-5e jour. Les parents doivent savoir reconnaître le tirage, la tachypnée, les pauses respiratoires et la baisse des boires. Les sirops antitussifs sont contre-indiqués chez le jeune enfant.",
          explEn: "Bronchiolitis can worsen on days 3 to 5. Parents must recognize retractions, tachypnea, breathing pauses and reduced feeding. Cough syrups are contraindicated in young children."
        }
      ]
    }
  ]
},
/* ---------- 5. Vaccination et immunisation ---------- */
{
  id: "vaccination", order: 5,
  title_fr: "Vaccination & immunisation", title_en: "Immunization",
  icon: "💉",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "À quel âge débute habituellement le calendrier régulier de vaccination au Québec ?",
          en: "At what age does the regular immunization schedule usually begin in Quebec?",
          choices: [ch("À la naissance", "At birth"), ch("À 2 mois", "At 2 months", true), ch("À 6 mois", "At 6 months"), ch("À 12 mois", "At 12 months")],
          explFr: "La première série de vaccins du calendrier régulier se donne à 2 mois. ⚠️ Toujours se référer au Protocole d'immunisation du Québec (PIQ) en vigueur.",
          explEn: "The first series of routine vaccines is given at 2 months. ⚠️ Always refer to the current Quebec Immunization Protocol (PIQ)."
        },
        {
          type: "tf",
          fr: "Les vaccins doivent être conservés au réfrigérateur, entre 2 °C et 8 °C.",
          en: "Vaccines must be kept refrigerated, between 2 °C and 8 °C.",
          isTrue: true,
          explFr: "Vrai. Le respect de la chaîne de froid (2 à 8 °C, jamais congelé) conditionne l'efficacité du vaccin. Toute rupture doit être déclarée.",
          explEn: "True. Maintaining the cold chain (2 to 8 °C, never frozen) determines vaccine effectiveness. Any break must be reported."
        },
        {
          fr: "Chez un nourrisson de moins de 12 mois, quel site est recommandé pour une injection intramusculaire ?",
          en: "In an infant under 12 months, which site is recommended for an intramuscular injection?",
          choices: [ch("Le muscle vaste externe (face antéro-latérale de la cuisse)", "The vastus lateralis (anterolateral thigh)", true), ch("Le muscle deltoïde", "The deltoid muscle"), ch("Le muscle fessier (dorsofessier)", "The dorsogluteal muscle"), ch("L'avant-bras", "The forearm")],
          explFr: "Avant 12 mois, le vaste externe est le site de choix : c'est la masse musculaire la mieux développée. Le deltoïde prend le relais chez l'enfant plus vieux.",
          explEn: "Before 12 months, the vastus lateralis is the site of choice: it is the best-developed muscle mass. The deltoid takes over in older children."
        },
        {
          fr: "Combien de temps doit-on garder une personne en observation après une vaccination ?",
          en: "How long should a person be kept under observation after a vaccination?",
          choices: [ch("5 minutes", "5 minutes"), ch("15 minutes", "15 minutes", true), ch("30 minutes", "30 minutes"), ch("Aucune observation n'est nécessaire", "No observation is needed")],
          explFr: "Quinze minutes d'observation permettent de détecter une réaction anaphylactique, qui survient presque toujours dans les premières minutes.",
          explEn: "Fifteen minutes of observation allows detection of anaphylaxis, which almost always occurs within the first few minutes."
        },
        {
          type: "tf",
          fr: "Un simple rhume sans fièvre importante n'est pas une contre-indication à la vaccination.",
          en: "A simple cold without significant fever is not a contraindication to immunization.",
          isTrue: true,
          explFr: "Vrai. Les maladies bénignes ne sont pas des contre-indications : reporter inutilement un vaccin laisse l'enfant vulnérable plus longtemps.",
          explEn: "True. Minor illnesses are not contraindications: needlessly postponing a vaccine leaves the child vulnerable longer."
        },
        {
          fr: "Quelle réaction est la plus fréquente après un vaccin chez l'enfant ?",
          en: "Which reaction is most common after a vaccine in children?",
          choices: [ch("Rougeur, douleur ou enflure au site d'injection", "Redness, pain or swelling at the injection site", true), ch("Une anaphylaxie", "Anaphylaxis"), ch("Des convulsions", "Seizures"), ch("Une paralysie", "Paralysis")],
          explFr: "Les réactions locales bénignes et une fièvre légère sont attendues. L'anaphylaxie est extrêmement rare, mais l'équipe doit toujours être prête à la traiter.",
          explEn: "Mild local reactions and low-grade fever are expected. Anaphylaxis is extremely rare, but the team must always be ready to treat it."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          ...match("Associe chaque élément de vaccination à sa définition.", "Match each immunization concept with its definition.", [
            pair("Immunité active", "Active immunity", "L'organisme fabrique lui-même ses anticorps après un vaccin ou une infection", "The body makes its own antibodies after a vaccine or infection"),
            pair("Immunité passive", "Passive immunity", "Des anticorps déjà formés sont transmis (placenta, lait maternel, immunoglobulines)", "Ready-made antibodies are transferred (placenta, breast milk, immunoglobulins)"),
            pair("Vaccin vivant atténué", "Live attenuated vaccine", "Contient un agent affaibli — ex. le vaccin RRO", "Contains a weakened agent — e.g. the MMR vaccine"),
            pair("Immunité collective", "Herd immunity", "Protection indirecte des non-vaccinés quand la couverture est élevée", "Indirect protection of the unvaccinated when coverage is high")
          ]),
          explFr: "Ces notions soutiennent l'enseignement aux parents : expliquer pourquoi on vaccine tôt, et pourquoi la couverture de la population protège les bébés trop jeunes pour être vaccinés.",
          explEn: "These concepts support parent teaching: explaining why we vaccinate early, and why population coverage protects babies too young to be vaccinated."
        },
        {
          fr: "À quel âge le vaccin contre la rougeole, la rubéole et les oreillons (RRO) est-il donné pour la première fois au Québec ?",
          en: "At what age is the measles, mumps and rubella (MMR) vaccine first given in Quebec?",
          choices: [ch("À 6 mois", "At 6 months"), ch("À 12 mois", "At 12 months", true), ch("À 18 mois", "At 18 months"), ch("À 4 ans", "At 4 years")],
          explFr: "La première dose de RRO se donne à 12 mois, une seconde dose suivant plus tard. ⚠️ Le calendrier exact doit être vérifié dans le PIQ en vigueur.",
          explEn: "The first MMR dose is given at 12 months, with a second dose later. ⚠️ The exact schedule must be verified in the current PIQ."
        },
        {
          type: "tf",
          fr: "Il est recommandé de donner systématiquement un antipyrétique AVANT un vaccin pour prévenir la fièvre.",
          en: "It is recommended to routinely give an antipyretic BEFORE a vaccine to prevent fever.",
          isTrue: false,
          explFr: "Faux. L'administration préventive systématique n'est pas recommandée (elle peut atténuer la réponse immunitaire). On traite l'inconfort s'il survient.",
          explEn: "False. Routine prophylactic administration is not recommended (it may blunt the immune response). Treat discomfort if it occurs."
        },
        {
          fr: "Quelle situation constitue une vraie contre-indication à un vaccin donné ?",
          en: "Which situation is a true contraindication to a given vaccine?",
          choices: [ch("Une anaphylaxie documentée à une dose antérieure du même vaccin ou à l'un de ses composants", "Documented anaphylaxis to a previous dose of the same vaccine or to one of its components", true), ch("Un traitement antibiotique en cours pour une otite", "Ongoing antibiotic treatment for an ear infection"), ch("Une diarrhée légère", "Mild diarrhea"), ch("L'allaitement", "Breastfeeding")],
          explFr: "Les vraies contre-indications sont rares : anaphylaxie antérieure, certains vaccins vivants chez l'immunosupprimé ou la femme enceinte. Le reste relève de fausses contre-indications.",
          explEn: "True contraindications are rare: previous anaphylaxis, some live vaccines in immunosuppressed or pregnant persons. The rest are false contraindications."
        },
        {
          fr: "Quelle stratégie réduit efficacement la douleur du vaccin chez le nourrisson ?",
          en: "Which strategy effectively reduces vaccine pain in an infant?",
          choices: [ch("L'allaiter ou lui donner une solution sucrée et le tenir peau à peau pendant l'injection", "Breastfeeding or giving a sweet solution and holding skin-to-skin during the injection", true), ch("Le coucher seul sur la table d'examen", "Laying them alone on the exam table"), ch("Lui dire que ça ne fera pas mal", "Telling them it will not hurt"), ch("Injecter le plus lentement possible sans le tenir", "Injecting as slowly as possible without holding them")],
          explFr: "Allaitement, solution sucrée, contact peau à peau et position confortable dans les bras du parent réduisent nettement la douleur et la détresse.",
          explEn: "Breastfeeding, sweet solutions, skin-to-skin contact and a comfortable position in the parent's arms clearly reduce pain and distress."
        },
        {
          type: "tf",
          fr: "Lorsque plusieurs vaccins injectables sont donnés le même jour, on utilise des sites d'injection différents et on documente chaque site.",
          en: "When several injectable vaccines are given on the same day, different injection sites are used and each site is documented.",
          isTrue: true,
          explFr: "Vrai. Des sites distincts (ou un espacement suffisant sur le même membre) permettent d'attribuer correctement une réaction locale au bon vaccin.",
          explEn: "True. Separate sites (or sufficient spacing on the same limb) make it possible to attribute a local reaction to the right vaccine."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Trois minutes après un vaccin, un enfant de 5 ans devient pâle, tousse, présente de l'urticaire au visage et une respiration sifflante. Quelle est votre action immédiate ?",
            "Three minutes after a vaccine, a 5-year-old becomes pale, coughs, develops facial hives and wheezing. What is your immediate action?",
            [
              ch("Administrer l'épinéphrine par voie intramusculaire dans le vaste externe et demander de l'aide", "Give intramuscular epinephrine in the vastus lateralis and call for help", true),
              ch("Donner un antihistaminique par la bouche et observer 20 minutes", "Give an oral antihistamine and observe for 20 minutes"),
              ch("Asseoir l'enfant et lui offrir de l'eau", "Sit the child up and offer water"),
              ch("Reprendre les signes vitaux dans 15 minutes", "Recheck vital signs in 15 minutes")
            ]),
          explFr: "Anaphylaxie : l'épinéphrine IM est le traitement de première intention, sans délai. Les antihistaminiques ne traitent ni le bronchospasme ni le choc.",
          explEn: "Anaphylaxis: IM epinephrine is the first-line treatment, without delay. Antihistamines treat neither bronchospasm nor shock."
        },
        {
          ...scenario(
            "Un parent hésitant dit : « J'ai lu que les vaccins donnent l'autisme et qu'on en donne trop d'un coup. » Quelle approche est la plus efficace ?",
            "A hesitant parent says: \"I read that vaccines cause autism and that too many are given at once.\" Which approach is most effective?",
            [
              ch("Accueillir la préoccupation, questionner ses sources, offrir une information claire et respecter le rythme du parent", "Acknowledge the concern, explore their sources, offer clear information and respect the parent's pace", true),
              ch("Lui dire qu'il a tort et passer au vaccin suivant", "Tell them they are wrong and move on to the next vaccine"),
              ch("Refuser de poursuivre le suivi de l'enfant", "Refuse to keep following the child"),
              ch("Éviter le sujet pour ne pas créer de conflit", "Avoid the topic to prevent conflict")
            ]),
          explFr: "L'hésitation vaccinale se travaille par l'écoute et l'entretien motivationnel. La confrontation renforce la résistance ; le lien de confiance permet souvent une décision favorable plus tard.",
          explEn: "Vaccine hesitancy is addressed through listening and motivational interviewing. Confrontation reinforces resistance; a trusting relationship often allows a favourable decision later."
        },
        {
          fr: "Un enfant sous chimiothérapie (immunosupprimé) se présente pour sa vaccination. Quelle est la considération principale ?",
          en: "A child on chemotherapy (immunosuppressed) presents for immunization. What is the main consideration?",
          choices: [ch("Les vaccins vivants atténués sont généralement contre-indiqués et la situation doit être évaluée par le médecin", "Live attenuated vaccines are generally contraindicated and the situation must be assessed by the physician", true), ch("Tous les vaccins sont interdits à vie", "All vaccines are banned for life"), ch("On double la dose pour compenser l'immunosuppression", "The dose is doubled to compensate for immunosuppression"), ch("Il n'y a aucune précaution particulière", "There is no particular precaution")],
          explFr: "Chez l'immunosupprimé, les vaccins vivants (RRO, varicelle) sont généralement contre-indiqués, alors que les vaccins inactivés restent souvent indiqués. La décision est médicale et individualisée.",
          explEn: "In immunosuppressed patients, live vaccines (MMR, varicella) are generally contraindicated, while inactivated vaccines often remain indicated. The decision is medical and individualized."
        },
        {
          type: "tf",
          fr: "Toute manifestation clinique inhabituelle survenant après une vaccination doit être déclarée aux autorités de santé publique.",
          en: "Any unusual clinical event occurring after immunization must be reported to public health authorities.",
          isTrue: true,
          explFr: "Vrai. Au Québec, la déclaration des manifestations cliniques inhabituelles (MCI) est une obligation qui alimente la surveillance de l'innocuité des vaccins.",
          explEn: "True. In Quebec, reporting adverse events following immunization (AEFI) is an obligation that feeds vaccine safety surveillance."
        },
        {
          fr: "Un enfant de 3 ans arrive avec un carnet incomplet : il lui manque des doses depuis l'âge de 6 mois. Que fait-on ?",
          en: "A 3-year-old arrives with an incomplete immunization record: doses have been missed since 6 months of age. What is done?",
          choices: [ch("On reprend la vaccination là où elle s'est arrêtée, sans recommencer la série au complet", "Immunization resumes where it stopped, without restarting the whole series", true), ch("On recommence toute la série depuis le début", "The entire series is restarted from the beginning"), ch("On abandonne : il est trop tard", "It is abandoned: it is too late"), ch("On donne toutes les doses manquantes le même jour, sans intervalle", "All missed doses are given the same day, with no interval")],
          explFr: "Une série interrompue se poursuit, elle ne se recommence pas. On applique un calendrier de rattrapage en respectant les intervalles minimaux prévus au PIQ.",
          explEn: "An interrupted series is continued, not restarted. A catch-up schedule is applied, respecting the minimum intervals set out in the PIQ."
        },
        {
          ...match("Associe chaque vaccin à la maladie qu'il prévient.", "Match each vaccine with the disease it prevents.", [
            pair("RRO", "MMR", "Rougeole, rubéole et oreillons", "Measles, rubella and mumps"),
            pair("Vaccin conjugué contre le pneumocoque", "Pneumococcal conjugate vaccine", "Pneumonies, otites et méningites à pneumocoque", "Pneumococcal pneumonia, ear infections and meningitis"),
            pair("Vaccin contre le rotavirus", "Rotavirus vaccine", "Gastroentérites sévères du nourrisson", "Severe infant gastroenteritis"),
            pair("Composante coquelucheuse (Ca)", "Pertussis component (aP)", "Coqueluche", "Whooping cough")
          ]),
          explFr: "Savoir nommer la maladie derrière chaque vaccin aide à répondre aux questions des parents et à expliquer l'utilité concrète de chaque dose.",
          explEn: "Being able to name the disease behind each vaccine helps answer parents' questions and explain the concrete purpose of each dose."
        }
      ]
    }
  ]
},

/* ---------- 6. Médication pédiatrique et calcul de dose ---------- */
{
  id: "medication", order: 6,
  title_fr: "Médication & calcul de dose", title_en: "Medication & Dosage",
  icon: "💊",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "En pédiatrie, la dose d'un médicament est le plus souvent calculée selon :",
          en: "In pediatrics, a medication dose is most often calculated according to:",
          choices: [ch("Le poids de l'enfant en kilogrammes", "The child's weight in kilograms", true), ch("L'âge de l'enfant en années", "The child's age in years"), ch("La taille de l'enfant en centimètres", "The child's height in centimetres"), ch("La dose adulte divisée par deux", "The adult dose divided by two")],
          explFr: "La dose se calcule en mg/kg, à partir d'un poids réel et récent, pesé en kilogrammes. L'âge seul n'est jamais suffisant.",
          explEn: "Doses are calculated in mg/kg, using a real and recent weight in kilograms. Age alone is never sufficient."
        },
        {
          type: "tf",
          fr: "On doit utiliser une seringue orale graduée plutôt qu'une cuillère de cuisine pour administrer un médicament liquide à un enfant.",
          en: "A graduated oral syringe must be used rather than a kitchen spoon to give a liquid medication to a child.",
          isTrue: true,
          explFr: "Vrai. Les cuillères domestiques varient énormément de volume : la seringue orale est le seul dispositif fiable, et l'enseignement aux parents en dépend.",
          explEn: "True. Household spoons vary enormously in volume: the oral syringe is the only reliable device, and parent teaching depends on it."
        },
        {
          fr: "La dose usuelle d'acétaminophène chez l'enfant est d'environ :",
          en: "The usual acetaminophen dose in children is about:",
          choices: [ch("5 mg/kg/dose", "5 mg/kg/dose"), ch("10 à 15 mg/kg/dose", "10 to 15 mg/kg/dose", true), ch("25 mg/kg/dose", "25 mg/kg/dose"), ch("50 mg/kg/dose", "50 mg/kg/dose")],
          explFr: "Environ 10 à 15 mg/kg par dose, aux 4 à 6 heures, sans dépasser la dose quotidienne maximale. ⚠️ Toujours valider avec l'ordonnance et le protocole du milieu.",
          explEn: "About 10 to 15 mg/kg per dose, every 4 to 6 hours, without exceeding the maximum daily dose. ⚠️ Always verify against the order and the facility protocol."
        },
        {
          fr: "Un enfant pèse 16 kg. L'ordonnance indique de l'acétaminophène 15 mg/kg/dose. Quelle dose doit-il recevoir ?",
          en: "A child weighs 16 kg. The order is acetaminophen 15 mg/kg/dose. What dose should be given?",
          choices: [ch("160 mg", "160 mg"), ch("240 mg", "240 mg", true), ch("320 mg", "320 mg"), ch("480 mg", "480 mg")],
          explFr: "16 kg × 15 mg/kg = 240 mg. Le calcul au poids est la base de toute administration sécuritaire en pédiatrie.",
          explEn: "16 kg × 15 mg/kg = 240 mg. Weight-based calculation is the foundation of safe pediatric administration."
        },
        {
          type: "tf",
          fr: "Avant d'administrer un médicament à un enfant, on vérifie son identité à l'aide de deux identifiants (ex. bracelet et confirmation du parent).",
          en: "Before giving a medication to a child, identity is verified using two identifiers (e.g. wristband and parent confirmation).",
          isTrue: true,
          explFr: "Vrai. On ne se fie jamais au seul fait que l'enfant réponde à un prénom : les jeunes enfants répondent « oui » à tout.",
          explEn: "True. Never rely on a child answering to a name: young children say \"yes\" to anything."
        },
        {
          fr: "Quelle information doit obligatoirement être vérifiée avant toute administration en pédiatrie ?",
          en: "Which piece of information must always be verified before any pediatric administration?",
          choices: [ch("Les allergies de l'enfant", "The child's allergies", true), ch("La couleur préférée de l'enfant", "The child's favourite colour"), ch("Le nom de son école", "The name of their school"), ch("Le poids de son parent", "The parent's weight")],
          explFr: "Allergies, poids à jour, dose maximale et voie d'administration : ce sont les vérifications de base, en plus des bons principes d'administration.",
          explEn: "Allergies, current weight, maximum dose and route: these are the basic checks, in addition to the rights of medication administration."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          fr: "Un enfant de 15 kg doit recevoir de l'amoxicilline 50 mg/kg/jour, répartie en 3 doses égales. Quelle est la dose par administration ?",
          en: "A 15 kg child must receive amoxicillin 50 mg/kg/day, divided into 3 equal doses. What is the dose per administration?",
          choices: [ch("150 mg", "150 mg"), ch("250 mg", "250 mg", true), ch("500 mg", "500 mg"), ch("750 mg", "750 mg")],
          explFr: "15 kg × 50 mg = 750 mg par jour ; 750 ÷ 3 = 250 mg par dose. Il faut toujours distinguer la dose QUOTIDIENNE de la dose PAR ADMINISTRATION.",
          explEn: "15 kg × 50 mg = 750 mg per day; 750 ÷ 3 = 250 mg per dose. Always distinguish the DAILY dose from the dose PER ADMINISTRATION."
        },
        {
          fr: "La suspension d'acétaminophène est dosée à 160 mg / 5 mL. Quel volume faut-il prélever pour administrer 240 mg ?",
          en: "Acetaminophen suspension is 160 mg / 5 mL. What volume is needed to give 240 mg?",
          choices: [ch("5 mL", "5 mL"), ch("6 mL", "6 mL"), ch("7,5 mL", "7.5 mL", true), ch("10 mL", "10 mL")],
          explFr: "160 mg / 5 mL = 32 mg/mL ; 240 ÷ 32 = 7,5 mL. On prélève avec une seringue orale graduée et on vérifie le calcul avec une collègue au besoin.",
          explEn: "160 mg / 5 mL = 32 mg/mL; 240 ÷ 32 = 7.5 mL. Draw up with a graduated oral syringe and double-check the calculation with a colleague if needed."
        },
        {
          type: "tf",
          fr: "On écrit « 0,5 mg » et jamais « ,5 mg », et on n'ajoute jamais de zéro inutile comme « 5,0 mg ».",
          en: "We write \"0.5 mg\" and never \".5 mg\", and we never add a trailing zero such as \"5.0 mg\".",
          isTrue: true,
          explFr: "Vrai. Le zéro manquant ou le zéro superflu sont la cause classique d'erreurs par facteur 10 — des erreurs mortelles en pédiatrie.",
          explEn: "True. A missing or trailing zero is the classic cause of tenfold errors — fatal errors in pediatrics."
        },
        {
          fr: "Quelle est la meilleure façon de donner un médicament oral à un trottineur qui refuse ?",
          en: "What is the best way to give an oral medication to a toddler who refuses?",
          choices: [ch("Offrir un choix limité (dans quel gobelet, assis où) et administrer lentement dans la joue avec une seringue orale", "Offer a limited choice (which cup, where to sit) and give it slowly into the cheek with an oral syringe", true), ch("Le mélanger dans le biberon de lait complet", "Mix it into a full bottle of milk"), ch("Pincer le nez pour l'obliger à avaler", "Pinch the nose to force swallowing"), ch("Lui dire que c'est un bonbon", "Tell them it is candy")],
          explFr: "Le choix limité respecte le besoin d'autonomie du trottineur. On ne mélange pas dans un biberon complet (dose incertaine s'il ne finit pas) et on n'appelle jamais un médicament « bonbon ».",
          explEn: "A limited choice respects the toddler's need for autonomy. Do not mix into a full bottle (uncertain dose if unfinished) and never call medication \"candy\"."
        },
        {
          ...match("Associe chaque élément de sécurité à sa raison d'être.", "Match each safety element with its rationale.", [
            pair("Double vérification indépendante", "Independent double check", "Détecter une erreur de calcul avant l'administration", "Catch a calculation error before administration"),
            pair("Poids en kilogrammes seulement", "Weight in kilograms only", "Éviter les erreurs de conversion livres/kilos", "Avoid pound/kilogram conversion errors"),
            pair("Seringue orale graduée", "Graduated oral syringe", "Mesurer un petit volume avec précision", "Measure a small volume accurately"),
            pair("Dose maximale vérifiée", "Maximum dose verified", "Confirmer que la dose calculée reste sécuritaire", "Confirm the calculated dose remains safe")
          ]),
          explFr: "La sécurité pédiatrique repose sur des barrières cumulées : poids exact, calcul vérifié, dispositif adapté, dose maximale connue.",
          explEn: "Pediatric safety relies on layered barriers: exact weight, verified calculation, appropriate device, known maximum dose."
        },
        {
          fr: "Un enfant de 20 kg doit recevoir de l'ibuprofène 10 mg/kg/dose. Quelle dose administrez-vous ?",
          en: "A 20 kg child must receive ibuprofen 10 mg/kg/dose. What dose do you give?",
          choices: [ch("100 mg", "100 mg"), ch("200 mg", "200 mg", true), ch("400 mg", "400 mg"), ch("600 mg", "600 mg")],
          explFr: "20 kg × 10 mg/kg = 200 mg. On vérifie ensuite que cette dose ne dépasse pas la dose maximale par administration prévue à l'ordonnance.",
          explEn: "20 kg × 10 mg/kg = 200 mg. Then verify that this dose does not exceed the maximum per-dose amount in the order."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "L'ordonnance indique 25 mg d'un médicament pour un enfant de 10 kg. La dose recommandée est de 1 mg/kg/dose. Que faites-vous ?",
            "The order reads 25 mg of a medication for a 10 kg child. The recommended dose is 1 mg/kg/dose. What do you do?",
            [
              ch("Ne pas administrer et clarifier l'ordonnance avec le prescripteur", "Do not give it and clarify the order with the prescriber", true),
              ch("Administrer la dose prescrite : l'ordonnance fait foi", "Give the dose as prescribed: the order prevails"),
              ch("Administrer 10 mg sans en parler à personne", "Give 10 mg without telling anyone"),
              ch("Demander au parent ce qu'il préfère", "Ask the parent what they prefer")
            ]),
          explFr: "La dose attendue est de 10 mg : l'ordonnance représente 2,5 fois la dose. L'infirmière a l'obligation de ne pas administrer et de clarifier — jamais d'ajuster seule.",
          explEn: "The expected dose is 10 mg: the order is 2.5 times the dose. The nurse must withhold and clarify — never adjust on their own."
        },
        {
          ...scenario(
            "Une mère raconte qu'elle donne à son bébé de 8 mois « la moitié du comprimé pour adulte écrasé » quand il fait de la fièvre. Quelle est votre intervention ?",
            "A mother reports giving her 8-month-old \"half a crushed adult tablet\" when he has a fever. What is your intervention?",
            [
              ch("Expliquer le danger, enseigner la formulation pédiatrique et la dose au poids avec une seringue orale, et vérifier sa compréhension", "Explain the danger, teach the pediatric formulation and weight-based dose with an oral syringe, and check understanding", true),
              ch("La féliciter d'avoir trouvé une solution économique", "Congratulate her on finding a cheaper solution"),
              ch("Lui dire de donner le quart du comprimé à la place", "Tell her to give a quarter tablet instead"),
              ch("Ne rien dire : ce n'est pas un médicament dangereux", "Say nothing: it is not a dangerous medication")
            ]),
          explFr: "Un comprimé adulte fractionné donne une dose imprécise et peut mener à un surdosage hépatotoxique. On enseigne la suspension pédiatrique, la dose en mg/kg et la mesure à la seringue orale.",
          explEn: "A split adult tablet gives an imprecise dose and can lead to hepatotoxic overdose. Teach the pediatric suspension, the mg/kg dose and measuring with an oral syringe."
        },
        {
          fr: "Un enfant de 12 kg doit recevoir un bolus de soluté de 20 mL/kg. Quel volume total sera perfusé ?",
          en: "A 12 kg child needs a fluid bolus of 20 mL/kg. What total volume will be infused?",
          choices: [ch("120 mL", "120 mL"), ch("200 mL", "200 mL"), ch("240 mL", "240 mL", true), ch("500 mL", "500 mL")],
          explFr: "12 kg × 20 mL/kg = 240 mL. En pédiatrie, les volumes se calculent au poids et s'administrent avec une pompe volumétrique et une surveillance étroite.",
          explEn: "12 kg × 20 mL/kg = 240 mL. In pediatrics, volumes are weight-based and given with a volumetric pump and close monitoring."
        },
        {
          type: "tf",
          fr: "Une erreur de médication sans conséquence apparente pour l'enfant n'a pas à être déclarée.",
          en: "A medication error with no apparent consequence for the child does not need to be reported.",
          isTrue: false,
          explFr: "Faux. Toute erreur, même sans conséquence, se déclare (rapport d'incident/accident) : c'est ce qui permet de corriger les causes systémiques avant qu'un enfant soit blessé.",
          explEn: "False. Every error, even harmless, must be reported (incident/accident report): this is what allows systemic causes to be corrected before a child is harmed."
        },
        {
          fr: "Pourquoi la marge d'erreur est-elle plus étroite en pédiatrie qu'en soins aux adultes ?",
          en: "Why is the margin of error narrower in pediatrics than in adult care?",
          choices: [ch("Les petits poids et les organes immatures amplifient l'effet d'un écart de dose", "Small body weights and immature organs amplify the effect of a dosing deviation", true), ch("Les enfants refusent plus souvent leurs médicaments", "Children refuse their medications more often"), ch("Les médicaments pédiatriques sont plus concentrés", "Pediatric medications are more concentrated"), ch("Les parents surveillent moins", "Parents supervise less")],
          explFr: "Chez un bébé de 4 kg, une erreur d'un facteur 10 représente une dose massive. Immaturité hépatique et rénale, faible réserve : tout écart compte.",
          explEn: "In a 4 kg baby, a tenfold error represents a massive dose. Liver and kidney immaturity plus low reserve mean every deviation counts."
        },
        {
          ...match("Associe chaque « bon principe » d'administration à sa vérification concrète en pédiatrie.", "Match each medication \"right\" with its concrete pediatric check.", [
            pair("Le bon usager", "The right patient", "Deux identifiants : bracelet et confirmation du parent", "Two identifiers: wristband and parent confirmation"),
            pair("La bonne dose", "The right dose", "Recalcul en mg/kg à partir du poids du jour", "Recalculate in mg/kg from today's weight"),
            pair("La bonne voie", "The right route", "Seringue ORALE pour la voie orale, jamais une seringue à injection", "ORAL syringe for the oral route, never an injection syringe"),
            pair("Le bon moment", "The right time", "Respect de l'intervalle minimal entre les doses", "Respect of the minimum interval between doses")
          ]),
          explFr: "Les bons principes d'administration prennent une couleur particulière en pédiatrie : identification indirecte, recalcul systématique et dispositifs spécifiques.",
          explEn: "The medication rights take on a particular meaning in pediatrics: indirect identification, systematic recalculation and dedicated devices."
        }
      ]
    }
  ]
},
/* ---------- 7. Nutrition infantile ---------- */
{
  id: "nutrition", order: 7,
  title_fr: "Nutrition infantile", title_en: "Infant & Child Nutrition",
  icon: "🍼",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "Jusqu'à quel âge l'allaitement exclusif est-il recommandé au Canada ?",
          en: "Up to what age is exclusive breastfeeding recommended in Canada?",
          choices: [ch("2 mois", "2 months"), ch("4 mois", "4 months"), ch("6 mois", "6 months", true), ch("12 mois", "12 months")],
          explFr: "Allaitement exclusif pendant les 6 premiers mois, puis poursuite avec des aliments complémentaires jusqu'à 2 ans et au-delà, selon le désir de la mère et de l'enfant.",
          explEn: "Exclusive breastfeeding for the first 6 months, then continued with complementary foods up to 2 years and beyond, as the mother and child wish."
        },
        {
          type: "tf",
          fr: "Le miel est contre-indiqué avant l'âge de 1 an.",
          en: "Honey is contraindicated before 1 year of age.",
          isTrue: true,
          explFr: "Vrai. Le miel peut contenir des spores de Clostridium botulinum et causer le botulisme infantile, car la flore intestinale du bébé est immature.",
          explEn: "True. Honey can contain Clostridium botulinum spores and cause infant botulism, because the baby's gut flora is immature."
        },
        {
          fr: "Vers quel âge introduit-on les aliments complémentaires (solides) ?",
          en: "At around what age are complementary (solid) foods introduced?",
          choices: [ch("Vers 2 mois", "Around 2 months"), ch("Vers 4 mois", "Around 4 months"), ch("Vers 6 mois", "Around 6 months", true), ch("Vers 12 mois", "Around 12 months")],
          explFr: "Vers 6 mois, quand l'enfant tient sa tête, s'assoit avec appui et montre de l'intérêt pour les aliments. On commence par des aliments riches en fer.",
          explEn: "Around 6 months, when the child holds their head up, sits with support and shows interest in food. Start with iron-rich foods."
        },
        {
          fr: "Quels aliments doivent être offerts en premier lors de l'introduction des solides ?",
          en: "Which foods should be offered first when introducing solids?",
          choices: [ch("Des aliments riches en fer (viande, volaille, poisson, œuf, céréales enrichies, légumineuses)", "Iron-rich foods (meat, poultry, fish, egg, iron-fortified cereals, legumes)", true), ch("Des jus de fruits", "Fruit juices"), ch("Du lait de vache", "Cow's milk"), ch("Des desserts sucrés", "Sweet desserts")],
          explFr: "Les réserves de fer du bébé s'épuisent vers 6 mois : les aliments riches en fer doivent venir en premier pour prévenir l'anémie ferriprive.",
          explEn: "The baby's iron stores are depleted around 6 months: iron-rich foods must come first to prevent iron-deficiency anemia."
        },
        {
          type: "tf",
          fr: "On ne doit jamais coucher un bébé avec un biberon dans la bouche.",
          en: "A baby must never be put to bed with a bottle in their mouth.",
          isTrue: true,
          explFr: "Vrai. Le biberon au lit cause la carie de la petite enfance et augmente le risque d'étouffement et d'otite.",
          explEn: "True. A bottle in bed causes early childhood caries and increases the risk of choking and ear infections."
        },
        {
          fr: "Quel supplément quotidien est recommandé au nourrisson allaité au Canada ?",
          en: "Which daily supplement is recommended for breastfed infants in Canada?",
          choices: [ch("Vitamine D 400 UI", "Vitamin D 400 IU", true), ch("Vitamine B12", "Vitamin B12"), ch("Vitamine A", "Vitamin A"), ch("Zinc", "Zinc")],
          explFr: "400 UI de vitamine D par jour, dès la naissance, pour le bébé allaité : c'est la prévention du rachitisme.",
          explEn: "400 IU of vitamin D per day, from birth, for the breastfed baby: this prevents rickets."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          fr: "À partir de quel âge le lait de vache entier (3,25 %) peut-il être offert comme boisson principale ?",
          en: "From what age can whole cow's milk (3.25 %) be offered as the main drink?",
          choices: [ch("Dès 4 mois", "From 4 months"), ch("Entre 9 et 12 mois", "Between 9 and 12 months", true), ch("Seulement à 2 ans", "Only at 2 years"), ch("Dès la naissance si le bébé n'est pas allaité", "From birth if the baby is not breastfed")],
          explFr: "Le lait de vache entier peut être introduit entre 9 et 12 mois, une fois l'alimentation solide bien établie. Avant cela : lait maternel ou préparation commerciale enrichie de fer.",
          explEn: "Whole cow's milk may be introduced between 9 and 12 months, once solids are well established. Before that: breast milk or iron-fortified commercial formula."
        },
        {
          ...match("Associe chaque aliment à la raison pour laquelle il est déconseillé au jeune enfant.", "Match each food with the reason it is not advised for young children.", [
            pair("Miel avant 1 an", "Honey before age 1", "Risque de botulisme infantile", "Risk of infant botulism"),
            pair("Raisins entiers, noix, maïs soufflé", "Whole grapes, nuts, popcorn", "Risque d'étouffement", "Choking hazard"),
            pair("Jus sucrés en grande quantité", "Large amounts of sweet juice", "Caries, diarrhée et perte d'appétit", "Cavities, diarrhea and loss of appetite"),
            pair("Excès de lait après 1 an", "Excess milk after age 1", "Anémie ferriprive par déplacement des aliments riches en fer", "Iron-deficiency anemia by displacing iron-rich foods")
          ]),
          explFr: "Ces quatre pièges alimentaires reviennent constamment dans l'enseignement aux parents en clinique de suivi.",
          explEn: "These four dietary pitfalls come up constantly in parent teaching at well-child visits."
        },
        {
          type: "tf",
          fr: "Une préparation commerciale pour nourrisson doit être reconstituée exactement selon les instructions, sans jamais être diluée davantage.",
          en: "Commercial infant formula must be reconstituted exactly as directed, and never diluted further.",
          isTrue: true,
          explFr: "Vrai. Diluer pour « faire durer » la boîte cause une malnutrition et une intoxication à l'eau (hyponatrémie), parfois mortelle chez le nourrisson.",
          explEn: "True. Diluting to \"stretch\" the can causes malnutrition and water intoxication (hyponatremia), sometimes fatal in infants."
        },
        {
          fr: "Après l'âge de 1 an, la quantité de lait recommandée est d'environ :",
          en: "After 1 year of age, the recommended amount of milk is about:",
          choices: [ch("250 mL par jour au maximum", "250 mL per day maximum"), ch("500 à 750 mL par jour", "500 to 750 mL per day", true), ch("1,5 L par jour", "1.5 L per day"), ch("À volonté, il n'y a pas de limite", "Unlimited, there is no maximum")],
          explFr: "Environ 500 à 750 mL par jour. Au-delà, le lait remplace les aliments riches en fer et favorise l'anémie ferriprive.",
          explEn: "About 500 to 750 mL per day. Beyond that, milk replaces iron-rich foods and promotes iron-deficiency anemia."
        },
        {
          fr: "Comment reconnaît-on qu'un nourrisson allaité boit suffisamment ?",
          en: "How can you tell that a breastfed infant is getting enough milk?",
          choices: [ch("Gain de poids adéquat, 6 couches mouillées ou plus par jour et bébé satisfait après les boires", "Adequate weight gain, 6 or more wet diapers a day and a satisfied baby after feeds", true), ch("Il dort toute la nuit dès la 2e semaine", "They sleep through the night from the 2nd week"), ch("Il boit exactement toutes les 4 heures", "They feed exactly every 4 hours"), ch("Il ne régurgite jamais", "They never spit up")],
          explFr: "Courbe de poids, couches mouillées, selles et comportement après le boire sont les indicateurs fiables — pas l'horaire ni la durée des tétées.",
          explEn: "Weight curve, wet diapers, stools and behaviour after feeding are the reliable indicators — not the schedule or duration of feeds."
        },
        {
          type: "tf",
          fr: "Retarder l'introduction des aliments allergènes (arachide, œuf) après l'âge de 1 an réduit le risque d'allergie.",
          en: "Delaying the introduction of allergenic foods (peanut, egg) past 1 year of age reduces allergy risk.",
          isTrue: false,
          explFr: "Faux. Les recommandations actuelles favorisent au contraire l'introduction précoce, vers 6 mois, et une exposition régulière par la suite.",
          explEn: "False. Current recommendations favour early introduction, around 6 months, with regular exposure afterwards."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Un enfant de 18 mois boit 1,5 L de lait par jour et mange très peu de solides. Il est pâle et fatigué. Quelle hypothèse devez-vous considérer en priorité ?",
            "An 18-month-old drinks 1.5 L of milk a day and eats very few solids. He is pale and tired. Which hypothesis should you consider first?",
            [
              ch("Une anémie ferriprive liée à un excès de lait", "Iron-deficiency anemia linked to excess milk", true),
              ch("Un excès de vitamine D", "Vitamin D excess"),
              ch("Une allergie au lait apparue soudainement", "A suddenly appearing milk allergy"),
              ch("Une croissance normale sans inquiétude", "Normal growth, no concern")
            ]),
          explFr: "Le lait est pauvre en fer et coupe l'appétit. Au-delà de 750 mL par jour, le risque d'anémie ferriprive grimpe : on limite le lait et on augmente les aliments riches en fer.",
          explEn: "Milk is low in iron and suppresses appetite. Beyond 750 mL a day, iron-deficiency anemia risk rises: limit milk and increase iron-rich foods."
        },
        {
          ...scenario(
            "Une mère de jumeaux de 3 mois confie qu'elle ajoute de l'eau à la préparation pour que la boîte dure plus longtemps, faute d'argent. Quelle est la conduite la plus appropriée ?",
            "A mother of 3-month-old twins says she adds water to the formula to make the can last longer, because money is tight. What is the most appropriate course of action?",
            [
              ch("Expliquer sans juger le danger de la dilution, et l'orienter vers les ressources d'aide alimentaire et le travail social", "Explain the danger of diluting without judging, and refer her to food assistance resources and social work", true),
              ch("La féliciter pour sa débrouillardise", "Praise her resourcefulness"),
              ch("Lui dire de passer au lait de vache tout de suite", "Tell her to switch to cow's milk right away"),
              ch("Signaler la famille sans discussion préalable", "Report the family without any prior discussion")
            ]),
          explFr: "La dilution peut causer convulsions et hyponatrémie. La réponse combine enseignement clinique ET action sur la cause : insécurité alimentaire, ressources communautaires, travail social.",
          explEn: "Diluting can cause seizures and hyponatremia. The response combines clinical teaching AND action on the cause: food insecurity, community resources, social work."
        },
        {
          fr: "Quel aliment représente le risque d'étouffement le plus élevé chez un enfant de 2 ans ?",
          en: "Which food carries the highest choking risk for a 2-year-old?",
          choices: [ch("Des raisins entiers", "Whole grapes", true), ch("Du yogourt", "Yogurt"), ch("De la purée de pommes de terre", "Mashed potatoes"), ch("Du pain grillé en petits morceaux", "Toast in small pieces")],
          explFr: "Les aliments ronds, fermes et glissants (raisins entiers, saucisses en rondelles, noix, bonbons durs, maïs soufflé) sont à éviter ou à couper en quatre sur la longueur avant 4 ans.",
          explEn: "Round, firm, slippery foods (whole grapes, sliced hot dogs, nuts, hard candy, popcorn) should be avoided or quartered lengthwise before age 4."
        },
        {
          type: "tf",
          fr: "Chez l'enfant d'âge préscolaire, le parent décide QUOI est servi et QUAND, tandis que l'enfant décide COMBIEN il mange.",
          en: "In preschoolers, the parent decides WHAT is served and WHEN, while the child decides HOW MUCH they eat.",
          isTrue: true,
          explFr: "Vrai. Ce partage des responsabilités réduit les luttes de pouvoir à table et respecte les signaux de faim et de satiété de l'enfant.",
          explEn: "True. This division of responsibility reduces power struggles at the table and respects the child's hunger and fullness cues."
        },
        {
          ...match("Associe chaque besoin nutritionnel à l'âge correspondant.", "Match each nutritional need with the corresponding age.", [
            pair("Lait maternel ou préparation exclusivement", "Breast milk or formula exclusively", "De 0 à 6 mois", "From 0 to 6 months"),
            pair("Aliments riches en fer en textures adaptées", "Iron-rich foods in adapted textures", "Vers 6 à 9 mois", "Around 6 to 9 months"),
            pair("Repas familiaux et 500-750 mL de lait par jour", "Family meals and 500-750 mL of milk a day", "De 1 à 2 ans", "From 1 to 2 years"),
            pair("Néophobie alimentaire et appétit variable", "Food neophobia and variable appetite", "De 2 à 5 ans", "From 2 to 5 years")
          ]),
          explFr: "Savoir ce qui est normal à chaque âge — y compris la néophobie du préscolaire — évite des interventions inutiles et rassure les parents.",
          explEn: "Knowing what is normal at each age — including preschool neophobia — prevents unnecessary interventions and reassures parents."
        },
        {
          fr: "Un enfant de 3 ans refuse presque tous les légumes depuis deux mois. Sa croissance suit sa courbe. Quel conseil donnez-vous aux parents ?",
          en: "A 3-year-old has refused nearly all vegetables for two months. Growth follows the curve. What advice do you give the parents?",
          choices: [ch("Continuer d'offrir les aliments sans forcer ni négocier, en donnant l'exemple à table", "Keep offering the foods without forcing or bargaining, modelling at the table", true), ch("Obliger l'enfant à finir son assiette avant de quitter la table", "Make the child finish their plate before leaving the table"), ch("Remplacer les repas par un supplément nutritif", "Replace meals with a nutritional supplement"), ch("Promettre un dessert chaque fois qu'il mange un légume", "Promise dessert every time they eat a vegetable")],
          explFr: "La néophobie est normale entre 2 et 5 ans. L'exposition répétée, sans pression ni récompense, est la stratégie la plus efficace ; la croissance sur la courbe est rassurante.",
          explEn: "Neophobia is normal between 2 and 5 years. Repeated exposure, without pressure or rewards, is the most effective strategy; growth on the curve is reassuring."
        }
      ]
    }
  ]
},

/* ---------- 8. Sécurité et prévention des blessures ---------- */
{
  id: "securite", order: 8,
  title_fr: "Sécurité & prévention", title_en: "Safety & Injury Prevention",
  icon: "🛡️",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "Quelle est la cause la plus fréquente de décès chez l'enfant de plus de 1 an au Canada ?",
          en: "What is the most frequent cause of death in children over 1 year of age in Canada?",
          choices: [ch("Les blessures non intentionnelles (traumatismes)", "Unintentional injuries (trauma)", true), ch("Les infections", "Infections"), ch("Les maladies cardiaques", "Heart disease"), ch("Le diabète", "Diabetes")],
          explFr: "Les blessures évitables — route, noyade, chute, étouffement, intoxication — dominent la mortalité de l'enfance. D'où l'importance de la prévention à chaque visite.",
          explEn: "Preventable injuries — road, drowning, falls, choking, poisoning — dominate childhood mortality. Hence the importance of prevention at every visit."
        },
        {
          type: "tf",
          fr: "Un jeune enfant ne doit jamais être laissé seul dans le bain, même une minute.",
          en: "A young child must never be left alone in the bath, even for a minute.",
          isTrue: true,
          explFr: "Vrai. Une noyade peut survenir en quelques centimètres d'eau et en moins d'une minute, silencieusement. La surveillance doit être constante et à portée de bras.",
          explEn: "True. Drowning can occur in a few centimetres of water in less than a minute, silently. Supervision must be constant and within arm's reach."
        },
        {
          fr: "À quelle température maximale devrait être réglé le chauffe-eau dans une maison avec de jeunes enfants ?",
          en: "What should be the maximum water heater setting in a home with young children?",
          choices: [ch("Environ 49 °C", "About 49 °C", true), ch("Environ 60 °C", "About 60 °C"), ch("Environ 70 °C", "About 70 °C"), ch("La température n'a pas d'importance", "Temperature does not matter")],
          explFr: "Autour de 49 °C au robinet : la peau d'un enfant brûle au 3e degré en quelques secondes à 60 °C. On vérifie toujours l'eau du bain avant d'y mettre l'enfant.",
          explEn: "Around 49 °C at the tap: a child's skin sustains third-degree burns in seconds at 60 °C. Always test bath water before putting the child in."
        },
        {
          fr: "Dans quelle position un siège d'auto doit-il être installé pour un bébé ?",
          en: "In which position must a car seat be installed for a baby?",
          choices: [ch("Dos à la route, sur la banquette arrière", "Rear-facing, in the back seat", true), ch("Face à la route, sur le siège avant", "Forward-facing, in the front seat"), ch("Dos à la route, sur le siège avant", "Rear-facing, in the front seat"), ch("Dans les bras d'un adulte ceinturé", "In the arms of a belted adult")],
          explFr: "Dos à la route, à l'arrière, le plus longtemps possible selon les limites du fabricant : c'est la position qui protège le mieux la tête et le cou du jeune enfant.",
          explEn: "Rear-facing, in the back seat, for as long as possible within the manufacturer's limits: this position best protects a young child's head and neck."
        },
        {
          type: "tf",
          fr: "Les marchettes pour bébé sont interdites à la vente au Canada.",
          en: "Baby walkers are banned from sale in Canada.",
          isTrue: true,
          explFr: "Vrai. Interdites depuis 2004 en raison des chutes dans les escaliers et de l'accès facilité aux dangers. On ne peut ni les vendre, ni les revendre, ni les donner.",
          explEn: "True. Banned since 2004 because of stairway falls and easier access to hazards. They cannot be sold, resold or given away."
        },
        {
          fr: "Que doit-on faire en premier si un enfant a avalé un produit ménager ?",
          en: "What should be done first if a child has swallowed a household product?",
          choices: [ch("Appeler immédiatement le Centre antipoison du Québec", "Immediately call the Quebec Poison Control Centre", true), ch("Faire vomir l'enfant", "Make the child vomit"), ch("Lui donner du lait en grande quantité", "Give a large amount of milk"), ch("Attendre de voir s'il a des symptômes", "Wait to see if symptoms appear")],
          explFr: "On appelle sans délai le Centre antipoison (1 800 463-5060), avec le contenant en main. Faire vomir est dangereux, surtout avec un produit corrosif.",
          explEn: "Call the Poison Control Centre immediately (1-800-463-5060), with the container in hand. Inducing vomiting is dangerous, especially with corrosive products."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          ...match("Associe chaque groupe d'âge au risque de blessure le plus caractéristique.", "Match each age group with its most characteristic injury risk.", [
            pair("Nourrisson (0-12 mois)", "Infant (0-12 months)", "Chute de la table à langer et suffocation au lit", "Falls from the change table and suffocation in bed"),
            pair("Trottineur (1-3 ans)", "Toddler (1-3 years)", "Intoxication, noyade et brûlures", "Poisoning, drowning and burns"),
            pair("Âge scolaire (6-11 ans)", "School age (6-11 years)", "Blessures à vélo et accidents de la route", "Bicycle injuries and road accidents"),
            pair("Adolescent", "Adolescent", "Conduite à risque, sports et intoxications volontaires", "Risk-taking behaviour, sports and intentional poisoning")
          ]),
          explFr: "Les conseils de prévention doivent suivre le développement : ce qui menace un bébé immobile n'est pas ce qui menace un adolescent.",
          explEn: "Prevention advice must follow development: what threatens an immobile baby is not what threatens an adolescent."
        },
        {
          fr: "Selon la loi québécoise, jusqu'à quand un enfant doit-il utiliser un siège d'appoint en voiture ?",
          en: "Under Quebec law, until when must a child use a booster seat in a vehicle?",
          choices: [ch("Jusqu'à 145 cm ou 9 ans", "Until 145 cm or 9 years old", true), ch("Jusqu'à 100 cm ou 4 ans", "Until 100 cm or 4 years old"), ch("Jusqu'à 120 cm ou 6 ans", "Until 120 cm or 6 years old"), ch("Il n'y a aucune exigence légale", "There is no legal requirement")],
          explFr: "Au Québec, le siège d'appoint est obligatoire jusqu'à ce que l'enfant mesure 145 cm ou atteigne 9 ans. ⚠️ Vérifier la réglementation de la SAAQ en vigueur.",
          explEn: "In Quebec, a booster seat is required until the child reaches 145 cm or 9 years of age. ⚠️ Check the current SAAQ regulations."
        },
        {
          type: "tf",
          fr: "Une clôture sur quatre côtés autour d'une piscine résidentielle protège mieux qu'une clôture sur trois côtés utilisant la maison comme quatrième mur.",
          en: "A four-sided fence around a residential pool protects better than a three-sided fence using the house as the fourth wall.",
          isTrue: true,
          explFr: "Vrai. La clôture sur quatre côtés, avec porte à fermeture et verrouillage automatiques, empêche l'enfant d'accéder à la piscine depuis la maison.",
          explEn: "True. A four-sided fence, with a self-closing and self-latching gate, prevents the child from reaching the pool from inside the house."
        },
        {
          fr: "Quelle manœuvre est appropriée pour un nourrisson de 8 mois qui s'étouffe et ne peut plus tousser ?",
          en: "Which maneuver is appropriate for an 8-month-old who is choking and can no longer cough?",
          choices: [ch("5 tapes dans le dos suivies de 5 compressions thoraciques, en alternance", "5 back blows followed by 5 chest thrusts, alternating", true), ch("Des poussées abdominales (Heimlich)", "Abdominal thrusts (Heimlich)"), ch("Un balayage digital à l'aveugle de la bouche", "A blind finger sweep of the mouth"), ch("Le secouer par les pieds", "Shaking them by the feet")],
          explFr: "Avant 1 an : 5 tapes dorsales + 5 compressions thoraciques en alternance. Les poussées abdominales sont réservées à l'enfant de 1 an et plus ; le balayage à l'aveugle est proscrit.",
          explEn: "Under 1 year: 5 back blows + 5 chest thrusts, alternating. Abdominal thrusts are reserved for children 1 year and older; blind finger sweeps are prohibited."
        },
        {
          fr: "Quel conseil de sécurité est prioritaire dès qu'un bébé commence à se retourner seul ?",
          en: "Which safety advice becomes a priority as soon as a baby starts rolling over?",
          choices: [ch("Ne jamais le laisser seul sur une surface en hauteur, même une seconde", "Never leave them alone on an elevated surface, even for a second", true), ch("Lui donner un oreiller pour le confort", "Give them a pillow for comfort"), ch("Le coucher sur le ventre pour dormir", "Put them to sleep on their stomach"), ch("Installer un contour de lit matelassé", "Install padded bumper pads")],
          explFr: "Le retournement transforme la table à langer et le lit d'adulte en dangers de chute. Une main reste toujours sur l'enfant.",
          explEn: "Rolling turns the change table and adult bed into fall hazards. Always keep one hand on the child."
        },
        {
          type: "tf",
          fr: "Toute personne, y compris l'infirmière, a l'obligation légale de signaler au DPJ une situation où la sécurité ou le développement d'un enfant est compromis.",
          en: "Every person, including nurses, has a legal duty to report to youth protection a situation where a child's safety or development is at risk.",
          isTrue: true,
          explFr: "Vrai. La Loi sur la protection de la jeunesse impose ce signalement ; le secret professionnel ne s'y oppose pas. Dans le doute, on signale.",
          explEn: "True. The Youth Protection Act requires this report; professional secrecy does not override it. When in doubt, report."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Un bébé de 4 mois est amené pour « une chute du sofa ». Vous observez des ecchymoses d'âges différents sur le thorax et une histoire qui change d'une version à l'autre. Que faites-vous ?",
            "A 4-month-old is brought in after \"falling off the couch\". You see bruises of different ages on the chest and a story that changes from one version to the next. What do you do?",
            [
              ch("Documenter objectivement les observations, assurer la sécurité de l'enfant et signaler au DPJ", "Document the findings objectively, ensure the child's safety and report to youth protection", true),
              ch("Accepter l'explication et donner un congé avec conseils de prévention", "Accept the explanation and discharge with prevention advice"),
              ch("Confronter les parents en les accusant de maltraitance", "Confront the parents by accusing them of abuse"),
              ch("Attendre une deuxième visite pour voir si la situation se répète", "Wait for a second visit to see whether it happens again")
            ]),
          explFr: "Un bébé qui ne se déplace pas ne se fait pas d'ecchymoses au thorax. Incohérence de l'histoire + lésions d'âges différents = signalement obligatoire. On documente factuellement, sans accuser.",
          explEn: "A baby who cannot move does not bruise their chest. An inconsistent history + injuries of different ages = mandatory report. Document factually, without accusing."
        },
        {
          ...scenario(
            "Une famille dit avoir installé le siège d'auto face à la route pour leur enfant de 14 mois « parce qu'il a mal au cœur dos à la route ». Quelle est la meilleure intervention ?",
            "A family says they turned the car seat forward-facing for their 14-month-old \"because he gets carsick rear-facing\". What is the best intervention?",
            [
              ch("Expliquer que la position dos à la route protège mieux la tête et le cou, et chercher avec eux des solutions au mal des transports", "Explain that rear-facing better protects the head and neck, and look at motion-sickness solutions with them", true),
              ch("Approuver : l'enfant a plus de 12 mois", "Approve: the child is over 12 months"),
              ch("Leur dire de conduire plus lentement", "Tell them to drive more slowly"),
              ch("Ne pas aborder le sujet : c'est un choix familial", "Not raise the subject: it is a family choice")
            ]),
          explFr: "On recommande le dos à la route le plus longtemps possible, jusqu'aux limites du siège. L'enseignement efficace reconnaît l'obstacle vécu par la famille et cherche une solution avec elle.",
          explEn: "Rear-facing is recommended as long as possible, up to the seat's limits. Effective teaching acknowledges the family's real obstacle and looks for a solution with them."
        },
        {
          fr: "Quel élément d'aménagement réduit le plus le risque de mort subite du nourrisson ?",
          en: "Which sleep arrangement most reduces the risk of sudden infant death?",
          choices: [ch("Un lit vide : matelas ferme, sur le dos, sans oreiller, douillette ni toutou", "An empty crib: firm mattress, on the back, no pillow, duvet or stuffed toy", true), ch("Un nid douillet rempli de couvertures", "A cozy nest filled with blankets"), ch("Le partage du lit des parents", "Sharing the parents' bed"), ch("La position sur le ventre avec un contour de lit", "Stomach position with bumper pads")],
          explFr: "Le sommeil sécuritaire : sur le DOS, dans un lit VIDE, sur une surface FERME, dans la chambre des parents, sans fumée. Chaque objet dans le lit augmente le risque de suffocation.",
          explEn: "Safe sleep: on the BACK, in an EMPTY crib, on a FIRM surface, in the parents' room, smoke-free. Every object in the bed increases suffocation risk."
        },
        {
          type: "tf",
          fr: "Les produits toxiques et les médicaments doivent être rangés sous clé, en hauteur, dans leur contenant d'origine.",
          en: "Toxic products and medications must be locked away, up high, in their original container.",
          isTrue: true,
          explFr: "Vrai. Jamais transvidés dans une bouteille de boisson : l'enfant reconnaît le contenant, pas le contenu. Le bouchon « à l'épreuve des enfants » ralentit, mais n'empêche pas.",
          explEn: "True. Never transferred into a drink bottle: the child recognizes the container, not the contents. A child-resistant cap slows a child down but does not stop them."
        },
        {
          ...match("Associe chaque mesure de prévention au risque qu'elle vise.", "Match each prevention measure with the risk it targets.", [
            pair("Casque bien ajusté", "Properly fitted helmet", "Traumatisme crânien à vélo", "Head injury while cycling"),
            pair("Détecteur de fumée fonctionnel", "Working smoke detector", "Décès lors d'un incendie", "Death in a fire"),
            pair("Fixation des meubles au mur", "Anchoring furniture to the wall", "Écrasement par le basculement d'un meuble", "Crushing from furniture tip-over"),
            pair("Barrière en haut et en bas de l'escalier", "Gate at the top and bottom of the stairs", "Chute du trottineur", "Toddler falls")
          ]),
          explFr: "La prévention efficace agit sur l'environnement plutôt que de compter uniquement sur la surveillance : un enfant est rapide, un aménagement sécuritaire ne se fatigue pas.",
          explEn: "Effective prevention changes the environment rather than relying on supervision alone: a child is fast, a safe environment never gets tired."
        },
        {
          fr: "Quel est le risque principal lorsqu'un jeune enfant avale une pile bouton ?",
          en: "What is the main risk when a young child swallows a button battery?",
          choices: [ch("Une brûlure grave de l'œsophage en quelques heures : c'est une urgence", "Severe esophageal burn within hours: it is an emergency", true), ch("Une simple constipation", "Simple constipation"), ch("Aucun risque si l'enfant ne tousse pas", "No risk if the child is not coughing"), ch("Une coloration des selles sans gravité", "Harmless stool discolouration")],
          explFr: "Une pile bouton coincée dans l'œsophage cause une brûlure chimique en 2 heures et peut perforer. Direction l'urgence immédiatement, sans attendre de symptômes.",
          explEn: "A button battery lodged in the esophagus causes a chemical burn within 2 hours and can perforate. Go to the emergency department immediately, without waiting for symptoms."
        }
      ]
    }
  ]
},
/* ---------- 9. Communication et approche centrée sur la famille ---------- */
{
  id: "famille", order: 9,
  title_fr: "Communication & famille", title_en: "Communication & Family",
  icon: "👨‍👩‍👧",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "Quelle attitude favorise la collaboration d'un enfant de 4 ans lors d'un soin ?",
          en: "Which attitude encourages a 4-year-old's cooperation during a procedure?",
          choices: [ch("Se mettre à sa hauteur, utiliser des mots simples et concrets et lui offrir un petit choix", "Get down to their level, use simple concrete words and offer a small choice", true), ch("Parler uniquement au parent en ignorant l'enfant", "Speak only to the parent and ignore the child"), ch("Lui dire que ça ne fera pas mal du tout", "Tell them it will not hurt at all"), ch("Faire le soin le plus vite possible sans rien expliquer", "Do the procedure as fast as possible without explaining")],
          explFr: "Se mettre à la hauteur de l'enfant, nommer ce qui va se passer en mots concrets et offrir des choix réels (quel bras, quel pansement) réduit la peur et la contention.",
          explEn: "Getting to the child's level, naming what will happen in concrete words and offering real choices (which arm, which bandage) reduces fear and restraint."
        },
        {
          type: "tf",
          fr: "Il ne faut jamais mentir à un enfant en lui disant qu'un soin douloureux ne fera pas mal.",
          en: "You must never lie to a child by telling them a painful procedure will not hurt.",
          isTrue: true,
          explFr: "Vrai. Le mensonge détruit la confiance et rend tous les soins suivants plus difficiles. On dit la vérité avec des mots adaptés et on offre des moyens de se soutenir.",
          explEn: "True. Lying destroys trust and makes every subsequent procedure harder. Tell the truth in age-appropriate words and offer coping strategies."
        },
        {
          fr: "Quelle personne est la principale source de réconfort d'un enfant hospitalisé ?",
          en: "Who is the main source of comfort for a hospitalized child?",
          choices: [ch("Son parent ou la personne qui en prend soin habituellement", "Their parent or usual caregiver", true), ch("L'infirmière la plus expérimentée", "The most experienced nurse"), ch("Le médecin traitant", "The attending physician"), ch("Un autre enfant de la chambre", "Another child in the room")],
          explFr: "L'approche centrée sur la famille considère le parent comme un partenaire de soins présent, et non comme un visiteur.",
          explEn: "Family-centred care considers the parent a present care partner, not a visitor."
        },
        {
          fr: "Le jeu thérapeutique (poupée, matériel médical miniature) sert principalement à :",
          en: "Therapeutic play (dolls, miniature medical equipment) is mainly used to:",
          choices: [ch("Aider l'enfant à comprendre et à apprivoiser ce qu'il vit", "Help the child understand and tame what they are experiencing", true), ch("Occuper l'enfant pendant que l'équipe travaille", "Keep the child busy while the team works"), ch("Évaluer son intelligence", "Assess their intelligence"), ch("Remplacer l'analgésie", "Replace analgesia")],
          explFr: "Le jeu est le langage de l'enfant : il permet d'exprimer ses peurs, de reprendre du contrôle et de comprendre le soin à venir.",
          explEn: "Play is the child's language: it lets them express fears, regain control and understand the upcoming procedure."
        },
        {
          type: "tf",
          fr: "Pour évaluer la douleur d'un enfant qui ne parle pas encore, on observe son comportement (visage, pleurs, position, consolabilité).",
          en: "To assess pain in a child who cannot yet speak, we observe behaviour (face, crying, posture, consolability).",
          isTrue: true,
          explFr: "Vrai. Les échelles comportementales (comme FLACC) traduisent en score le visage, les jambes, l'activité, les pleurs et la consolabilité.",
          explEn: "True. Behavioural scales (such as FLACC) turn face, legs, activity, cry and consolability into a score."
        },
        {
          fr: "Comment devrait-on s'adresser à un adolescent lors d'une consultation ?",
          en: "How should you address an adolescent during a consultation?",
          choices: [ch("Directement à lui, en lui offrant un moment seul et en expliquant la confidentialité", "Directly to them, offering a moment alone and explaining confidentiality", true), ch("En passant toujours par ses parents", "Always through their parents"), ch("En utilisant leur langage d'ados pour faire complice", "Using teen slang to sound like a buddy"), ch("En évitant les sujets délicats", "By avoiding sensitive topics")],
          explFr: "L'adolescent a besoin qu'on s'adresse à lui, qu'on respecte son intimité et qu'on lui explique ce qui restera confidentiel — et ce qui ne pourra pas l'être.",
          explEn: "Adolescents need to be addressed directly, to have their privacy respected and to be told what will remain confidential — and what cannot."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          ...match("Associe chaque groupe d'âge à la préparation la plus appropriée avant un soin.", "Match each age group with the most appropriate preparation before a procedure.", [
            pair("Trottineur (1-3 ans)", "Toddler (1-3 years)", "Explication très courte, juste avant le soin", "Very short explanation, right before the procedure"),
            pair("Âge préscolaire (3-5 ans)", "Preschool (3-5 years)", "Quelques heures avant, avec du jeu et du matériel à manipuler", "A few hours before, with play and equipment to handle"),
            pair("Âge scolaire (6-11 ans)", "School age (6-11 years)", "Un à plusieurs jours avant, avec des explications concrètes", "One to several days before, with concrete explanations"),
            pair("Adolescent", "Adolescent", "À l'avance, avec des détails, en le faisant participer aux décisions", "Well in advance, with details, involving them in decisions")
          ]),
          explFr: "Plus l'enfant est jeune, plus la préparation doit être proche du soin : un trottineur prévenu trop tôt vit une anticipation anxieuse inutile.",
          explEn: "The younger the child, the closer the preparation must be to the procedure: a toddler told too early experiences needless anxious anticipation."
        },
        {
          fr: "Quelle échelle est appropriée pour évaluer la douleur d'un enfant de 5 ans qui s'exprime bien ?",
          en: "Which scale is appropriate to assess pain in a verbally able 5-year-old?",
          choices: [ch("Une échelle des visages", "A faces pain scale", true), ch("L'échelle numérique de 0 à 10", "The 0 to 10 numeric scale"), ch("L'échelle FLACC seulement", "The FLACC scale only"), ch("Aucune : on se fie au parent", "None: rely on the parent")],
          explFr: "L'échelle des visages convient vers 4 à 8 ans ; l'échelle numérique à partir d'environ 8 ans ; les échelles comportementales pour les tout-petits et les enfants non verbaux.",
          explEn: "A faces scale suits ages 4 to 8; the numeric scale from about 8 years; behavioural scales for toddlers and nonverbal children."
        },
        {
          type: "tf",
          fr: "La présence du parent pendant un soin douloureux devrait être encouragée, dans un rôle de réconfort et non de contention.",
          en: "Parental presence during a painful procedure should be encouraged, in a comforting role rather than a restraining one.",
          isTrue: true,
          explFr: "Vrai. Le parent réconforte, l'équipe fait le soin. Confier la contention au parent brise le lien de sécurité que l'enfant a avec lui.",
          explEn: "True. The parent comforts, the team performs the procedure. Having the parent restrain the child breaks the security bond between them."
        },
        {
          fr: "Quelle formulation est la plus appropriée avec un enfant d'âge préscolaire ?",
          en: "Which wording is most appropriate with a preschool child?",
          choices: [ch("« Je vais mettre un petit tube souple dans ta veine, ça va piquer quelques secondes. »", "\"I'm going to put a small soft tube in your vein, it will sting for a few seconds.\"", true), ch("« On va juste prendre un petit échantillon, tu ne sentiras rien. »", "\"We'll just take a small sample, you won't feel a thing.\""), ch("« On va te faire une injection intraveineuse périphérique. »", "\"We're going to perform a peripheral intravenous injection.\""), ch("« Si tu bouges, tu auras encore plus mal. »", "\"If you move, it will hurt even more.\"")],
          explFr: "Mots concrets, vrais, sans jargon ni menace, avec une durée annoncée : l'enfant tolère mieux ce qu'il peut se représenter.",
          explEn: "Concrete, truthful words, without jargon or threats, with an announced duration: children tolerate better what they can picture."
        },
        {
          fr: "Une famille ne parle ni français ni anglais. Quelle conduite est la plus appropriée ?",
          en: "A family speaks neither French nor English. What is the most appropriate course of action?",
          choices: [ch("Recourir à un interprète professionnel", "Use a professional interpreter", true), ch("Demander à l'enfant de 9 ans de traduire", "Ask the 9-year-old child to translate"), ch("Parler plus fort et plus lentement", "Speak louder and more slowly"), ch("Se limiter à des gestes", "Limit communication to gestures")],
          explFr: "L'enfant ne doit jamais servir d'interprète : cela l'expose à une information difficile et compromet l'exactitude du message et le consentement éclairé.",
          explEn: "A child must never act as interpreter: it exposes them to difficult information and compromises message accuracy and informed consent."
        },
        {
          type: "tf",
          fr: "Au Québec, un adolescent de 14 ans et plus peut généralement consentir seul aux soins requis par son état de santé.",
          en: "In Quebec, an adolescent aged 14 or over can generally consent alone to care required by their state of health.",
          isTrue: true,
          explFr: "Vrai. Le Code civil du Québec reconnaît au mineur de 14 ans et plus le droit de consentir seul aux soins requis par son état de santé, avec des exceptions prévues par la loi. ⚠️ Notion juridique à valider avec l'enseignante.",
          explEn: "True. The Civil Code of Quebec allows minors aged 14 and over to consent alone to care required by their state of health, with exceptions set out in law. ⚠️ Legal concept to validate with the teacher."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Une mère refuse de quitter le chevet de son fils de 6 ans et pose beaucoup de questions. Une collègue la trouve « contrôlante ». Comment interprétez-vous la situation ?",
            "A mother refuses to leave her 6-year-old son's bedside and asks many questions. A colleague finds her \"controlling\". How do you interpret the situation?",
            [
              ch("C'est l'expression d'anxiété et d'un besoin d'information : on l'intègre comme partenaire de soins", "It is an expression of anxiety and a need for information: include her as a care partner", true),
              ch("Il faut limiter ses visites pour protéger l'équipe", "Her visits should be limited to protect the team"),
              ch("Il faut lui dire de faire confiance et de cesser de poser des questions", "She should be told to trust the team and stop asking questions"),
              ch("Il faut demander une évaluation psychiatrique de la mère", "A psychiatric assessment of the mother should be requested")
            ]),
          explFr: "Dans l'approche centrée sur la famille, le parent connaît son enfant mieux que quiconque. Informer, expliquer et donner un rôle concret transforme l'anxiété en collaboration.",
          explEn: "In family-centred care, the parent knows the child best. Informing, explaining and giving a concrete role turns anxiety into collaboration."
        },
        {
          ...scenario(
            "Une adolescente de 15 ans vous demande si ce qu'elle vous confie sera répété à ses parents. Quelle réponse est la plus juste ?",
            "A 15-year-old asks whether what she tells you will be repeated to her parents. Which answer is most accurate?",
            [
              ch("Expliquer le cadre de la confidentialité et ses limites (danger pour elle-même ou pour autrui) AVANT qu'elle se confie", "Explain the framework of confidentiality and its limits (danger to herself or others) BEFORE she discloses", true),
              ch("Promettre un secret absolu pour obtenir sa confiance", "Promise absolute secrecy to gain her trust"),
              ch("Lui dire que tout sera rapporté aux parents", "Tell her everything will be reported to her parents"),
              ch("Éviter de répondre à la question", "Avoid answering the question")
            ]),
          explFr: "On annonce les règles du jeu d'abord : ce qui reste confidentiel et ce qui devra être partagé (danger, situation de protection). Promettre un secret absolu est une promesse impossible à tenir.",
          explEn: "State the ground rules first: what stays confidential and what will have to be shared (danger, protection situations). Promising absolute secrecy is a promise that cannot be kept."
        },
        {
          fr: "Un enfant de 3 ans hurle et se débat avant une prise de sang. Quelle approche est la meilleure ?",
          en: "A 3-year-old screams and struggles before a blood draw. Which approach is best?",
          choices: [ch("Position de confort dans les bras du parent, distraction adaptée et anesthésique topique", "Comfort position in the parent's arms, appropriate distraction and topical anesthetic", true), ch("Immobiliser rapidement l'enfant à quatre personnes pour en finir", "Quickly restrain the child with four people to get it over with"), ch("Reporter indéfiniment le prélèvement", "Postpone the draw indefinitely"), ch("Menacer de faire une deuxième piqûre s'il bouge", "Threaten a second needle if they move")],
          explFr: "Les soins atraumatiques réduisent la détresse et le nombre de tentatives : position de confort, distraction, anesthésique topique, et personnel préparé.",
          explEn: "Atraumatic care reduces distress and the number of attempts: comfort positioning, distraction, topical anesthetic and a prepared team."
        },
        {
          type: "tf",
          fr: "La contention physique d'un enfant pour un soin ne doit être utilisée qu'en dernier recours, le moins longtemps possible, et doit être documentée.",
          en: "Physical restraint of a child for a procedure must be used only as a last resort, for the shortest time possible, and must be documented.",
          isTrue: true,
          explFr: "Vrai. On privilégie la préparation, la distraction et les positions de confort. La contention est une mesure exceptionnelle, encadrée et consignée au dossier.",
          explEn: "True. Preparation, distraction and comfort positions come first. Restraint is an exceptional, regulated measure that must be charted."
        },
        {
          ...match("Associe chaque outil d'évaluation de la douleur à la clientèle visée.", "Match each pain assessment tool with its target population.", [
            pair("Échelle des visages", "Faces pain scale", "Enfant d'environ 4 à 8 ans", "Child of about 4 to 8 years"),
            pair("Échelle numérique 0 à 10", "Numeric scale 0 to 10", "Enfant de 8 ans et plus, et adolescent", "Child 8 years and older, and adolescents")
          ]),
          explFr: "Choisir le bon outil selon l'âge et la capacité d'expression est la base d'une prise en charge sérieuse de la douleur pédiatrique.",
          explEn: "Choosing the right tool for the child's age and ability to communicate is the foundation of serious pediatric pain management."
        },
        {
          fr: "Quel principe guide l'annonce d'une mauvaise nouvelle à une famille ?",
          en: "Which principle guides breaking bad news to a family?",
          choices: [ch("Un endroit calme, un langage clair, du temps pour les émotions et les questions, et un suivi offert", "A quiet place, clear language, time for emotions and questions, and offered follow-up", true), ch("Donner toute l'information technique le plus rapidement possible", "Deliver all technical information as quickly as possible"), ch("Laisser un dépliant et revenir plus tard", "Leave a pamphlet and come back later"), ch("Annoncer la nouvelle dans le corridor pour ménager l'enfant", "Give the news in the hallway to spare the child")],
          explFr: "Lieu approprié, présence des deux parents si possible, mots simples, silence respecté, vérification de la compréhension et suivi : la façon dont la nouvelle est annoncée reste gravée des années.",
          explEn: "An appropriate setting, both parents present when possible, simple words, respected silence, checking understanding and follow-up: how the news is delivered stays with families for years."
        }
      ]
    }
  ]
},

/* ---------- 10. Urgences pédiatriques ---------- */
{
  id: "urgences", order: 10,
  title_fr: "Urgences pédiatriques", title_en: "Pediatric Emergencies",
  icon: "🚑",
  tiers: [
    {
      level: 1,
      questions: [
        {
          fr: "Chez l'enfant, l'arrêt cardiorespiratoire est le plus souvent d'origine :",
          en: "In children, cardiorespiratory arrest is most often of which origin?",
          choices: [ch("Respiratoire (hypoxie)", "Respiratory (hypoxia)", true), ch("Cardiaque (infarctus)", "Cardiac (heart attack)"), ch("Neurologique", "Neurological"), ch("Allergique", "Allergic")],
          explFr: "Contrairement à l'adulte, l'enfant fait rarement un arrêt d'origine cardiaque primaire : c'est l'hypoxie qui mène à la bradycardie puis à l'arrêt. D'où la priorité absolue aux voies respiratoires.",
          explEn: "Unlike adults, children rarely have a primary cardiac arrest: hypoxia leads to bradycardia and then arrest. Hence the absolute priority on the airway."
        },
        {
          type: "tf",
          fr: "Le tirage, le battement des ailes du nez et le geignement expiratoire sont des signes de détresse respiratoire chez l'enfant.",
          en: "Retractions, nasal flaring and expiratory grunting are signs of respiratory distress in children.",
          isTrue: true,
          explFr: "Vrai. Ce sont des signes de travail respiratoire accru, visibles avant même de toucher l'enfant. Ils imposent une réévaluation immédiate.",
          explEn: "True. These are signs of increased work of breathing, visible before even touching the child. They call for immediate reassessment."
        },
        {
          fr: "Quels sont les trois éléments du triangle d'évaluation pédiatrique ?",
          en: "What are the three components of the pediatric assessment triangle?",
          choices: [ch("L'apparence, le travail respiratoire et la circulation cutanée", "Appearance, work of breathing and circulation to the skin", true), ch("La taille, le poids et l'âge", "Height, weight and age"), ch("La température, le pouls et la tension", "Temperature, pulse and blood pressure"), ch("La douleur, l'appétit et le sommeil", "Pain, appetite and sleep")],
          explFr: "Le triangle s'évalue en quelques secondes, à distance : apparence (tonus, interaction, regard, pleurs), travail respiratoire et coloration/perfusion de la peau.",
          explEn: "The triangle is assessed in seconds, from a distance: appearance (tone, interaction, gaze, cry), work of breathing and skin colour/perfusion."
        },
        {
          fr: "Quel signe doit être considéré comme le plus inquiétant chez un enfant malade ?",
          en: "Which sign should be considered the most worrisome in a sick child?",
          choices: [ch("Une léthargie inhabituelle avec difficulté à le réveiller", "Unusual lethargy with difficulty waking them", true), ch("Des pleurs vigoureux", "Vigorous crying"), ch("Un appétit un peu diminué", "Slightly reduced appetite"), ch("Une joue rouge", "A red cheek")],
          explFr: "Un enfant qui ne réagit plus normalement à son environnement est un enfant gravement atteint. Un enfant qui pleure vigoureusement ventile et perfuse.",
          explEn: "A child who no longer reacts normally to their environment is seriously ill. A child crying vigorously is ventilating and perfusing."
        },
        {
          type: "tf",
          fr: "Une fièvre chez un bébé de moins de 3 mois doit être évaluée médicalement sans délai.",
          en: "Fever in an infant under 3 months must be medically evaluated without delay.",
          isTrue: true,
          explFr: "Vrai. À cet âge, une infection grave peut se manifester uniquement par de la fièvre, sans autre signe localisateur.",
          explEn: "True. At this age, a serious infection may present only as fever, with no other localizing signs."
        },
        {
          fr: "Quel est le rythme de compressions thoraciques recommandé lors d'une réanimation pédiatrique ?",
          en: "What compression rate is recommended during pediatric resuscitation?",
          choices: [ch("60 à 80 par minute", "60 to 80 per minute"), ch("100 à 120 par minute", "100 to 120 per minute", true), ch("140 à 160 par minute", "140 to 160 per minute"), ch("Le plus vite possible", "As fast as possible")],
          explFr: "De 100 à 120 compressions par minute, en enfonçant d'environ le tiers du diamètre antéropostérieur du thorax, avec relâchement complet entre les compressions.",
          explEn: "100 to 120 compressions per minute, depressing about one third of the chest's anteroposterior diameter, with full recoil between compressions."
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          ...match("Associe chaque signe d'alerte à ce qu'il traduit.", "Match each warning sign with what it indicates.", [
            pair("Bradycardie chez le nourrisson", "Bradycardia in an infant", "Hypoxie sévère, arrêt imminent", "Severe hypoxia, imminent arrest"),
            pair("Remplissage capillaire de plus de 3 secondes", "Capillary refill over 3 seconds", "Perfusion périphérique insuffisante", "Inadequate peripheral perfusion"),
            pair("Fontanelle bombée avec fièvre", "Bulging fontanelle with fever", "Suspicion de méningite", "Suspected meningitis"),
            pair("Purpura qui ne blanchit pas à la pression", "Non-blanching purpura", "Suspicion de méningococcémie", "Suspected meningococcemia")
          ]),
          explFr: "Ces quatre signes font passer une situation de « à surveiller » à « urgence immédiate ». Les reconnaître vite sauve des vies.",
          explEn: "These four signs move a situation from \"watch closely\" to \"immediate emergency\". Recognizing them quickly saves lives."
        },
        {
          fr: "Quel rapport compressions/ventilations utilise-t-on chez l'enfant lorsque deux secouristes formés sont présents ?",
          en: "What compression-to-ventilation ratio is used in children when two trained rescuers are present?",
          choices: [ch("15 compressions pour 2 ventilations", "15 compressions to 2 ventilations", true), ch("30 compressions pour 2 ventilations", "30 compressions to 2 ventilations"), ch("5 compressions pour 1 ventilation", "5 compressions to 1 ventilation"), ch("Uniquement des compressions", "Compressions only")],
          explFr: "En pédiatrie, à deux secouristes : 15:2. Seul : 30:2. La ventilation est essentielle, car l'arrêt est d'origine respiratoire. ⚠️ Suivre les lignes directrices en vigueur.",
          explEn: "In pediatrics, with two rescuers: 15:2. Alone: 30:2. Ventilation is essential because arrest is respiratory in origin. ⚠️ Follow current guidelines."
        },
        {
          type: "tf",
          fr: "Chez un enfant en état de choc, une tension artérielle encore normale signifie que la situation est stable.",
          en: "In a child in shock, a still-normal blood pressure means the situation is stable.",
          isTrue: false,
          explFr: "Faux. L'enfant compense longtemps : la chute de tension est un signe tardif et annonce un arrêt imminent. On se fie aux signes précoces.",
          explEn: "False. Children compensate for a long time: a drop in blood pressure is a late sign heralding imminent arrest. Rely on early signs."
        },
        {
          type: "tf",
          fr: "L'infirmière auxiliaire a le droit d'installer un cathéter intraveineux chez un enfant de moins de 14 ans.",
          en: "A licensed practical nurse is allowed to insert an intravenous catheter in a child under 14 years old.",
          isTrue: false,
          explFr: "Faux. L'installation d'un cathéter intraveineux chez un enfant de moins de 14 ans ne fait pas partie du champ de pratique de l'infirmière auxiliaire.",
          explEn: "False. Inserting an IV catheter in a child under 14 is outside the licensed practical nurse's scope of practice."
        },
        {
          fr: "Comment reconnaît-on une anaphylaxie chez un enfant ?",
          en: "How is anaphylaxis recognized in a child?",
          choices: [ch("Atteinte de deux systèmes ou plus (peau, respiratoire, digestif, circulatoire) après une exposition", "Involvement of two or more systems (skin, respiratory, digestive, circulatory) after an exposure", true), ch("Uniquement par l'urticaire", "By hives alone"), ch("Uniquement par une chute de tension", "By a drop in blood pressure alone"), ch("Par une fièvre soudaine", "By a sudden fever")],
          explFr: "Urticaire + toux ou sifflement, ou vomissements + pâleur : dès que deux systèmes sont touchés après une exposition, on traite comme une anaphylaxie.",
          explEn: "Hives + cough or wheeze, or vomiting + pallor: as soon as two systems are involved after an exposure, treat as anaphylaxis."
        },
        {
          type: "tf",
          fr: "Lors d'une convulsion, il ne faut jamais mettre quoi que ce soit dans la bouche de l'enfant.",
          en: "During a seizure, never put anything in the child's mouth.",
          isTrue: true,
          explFr: "Vrai. On protège la tête, on tourne l'enfant sur le côté, on note l'heure de début et la durée, et on ne le contraint pas.",
          explEn: "True. Protect the head, turn the child on their side, note the start time and duration, and do not restrain them."
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          ...scenario(
            "Un enfant de 2 ans est somnolent, respire à 12/min après avoir eu une détresse respiratoire sévère pendant une heure. Sa FC passe de 180 à 70/min. Comment interprétez-vous cette évolution ?",
            "A 2-year-old is drowsy, breathing at 12/min after an hour of severe respiratory distress. Heart rate falls from 180 to 70/min. How do you interpret this change?",
            [
              ch("Un épuisement respiratoire avec bradycardie hypoxique : arrêt imminent, réanimation immédiate", "Respiratory exhaustion with hypoxic bradycardia: imminent arrest, immediate resuscitation", true),
              ch("Une amélioration : l'enfant se calme enfin", "An improvement: the child is finally calming down"),
              ch("Un effet normal du sommeil", "A normal effect of sleep"),
              ch("Une réaction à l'antipyrétique", "A reaction to the antipyretic")
            ]),
          explFr: "Le piège classique : la « fausse accalmie ». Une fréquence respiratoire qui chute avec somnolence et bradycardie signe l'épuisement et précède l'arrêt. On agit immédiatement.",
          explEn: "The classic trap: the \"false calm\". A falling respiratory rate with drowsiness and bradycardia signals exhaustion and precedes arrest. Act immediately."
        },
        {
          ...scenario(
            "Un nourrisson de 5 mois fiévreux est irritable, geint de façon aiguë, refuse de boire et a une fontanelle bombée. Quelle est votre priorité ?",
            "A febrile 5-month-old is irritable, has a high-pitched cry, refuses to feed and has a bulging fontanelle. What is your priority?",
            [
              ch("Suspecter une méningite et obtenir une évaluation médicale d'urgence", "Suspect meningitis and obtain urgent medical assessment", true),
              ch("Donner un biberon pour l'hydrater", "Give a bottle to hydrate them"),
              ch("Le coucher au calme et réévaluer dans 3 heures", "Put them down in a quiet room and reassess in 3 hours"),
              ch("Vérifier la raideur de nuque avant d'aviser quiconque", "Check for neck stiffness before notifying anyone")
            ]),
          explFr: "Chez le nourrisson, la raideur de nuque est souvent ABSENTE : ce sont l'irritabilité, le cri aigu, le refus de boire et la fontanelle bombée qui alertent. Urgence immédiate.",
          explEn: "In infants, neck stiffness is often ABSENT: irritability, high-pitched cry, feeding refusal and a bulging fontanelle are the alerts. Immediate emergency."
        },
        {
          fr: "Quelle est la voie et le site recommandés pour administrer l'épinéphrine lors d'une anaphylaxie chez un enfant ?",
          en: "What route and site are recommended to give epinephrine during anaphylaxis in a child?",
          choices: [ch("Intramusculaire, dans la face antéro-latérale de la cuisse", "Intramuscular, in the anterolateral thigh", true), ch("Sous-cutanée dans l'abdomen", "Subcutaneous in the abdomen"), ch("Par la bouche", "By mouth"), ch("Intramusculaire dans le fessier", "Intramuscular in the buttock")],
          explFr: "Épinéphrine IM dans le vaste externe : absorption la plus rapide et la plus fiable. On note l'heure, on surveille et on prépare une seconde dose au besoin.",
          explEn: "IM epinephrine in the vastus lateralis: fastest and most reliable absorption. Note the time, monitor and prepare a second dose if needed."
        },
        {
          type: "tf",
          fr: "Chez un enfant inconscient qui ne respire pas normalement, on commence la réanimation même si on n'est pas certain de l'absence de pouls.",
          en: "In an unresponsive child who is not breathing normally, resuscitation is started even if you are unsure whether a pulse is absent.",
          isTrue: true,
          explFr: "Vrai. La prise du pouls est peu fiable et ne doit pas retarder les compressions : au-delà de 10 secondes d'incertitude, on commence.",
          explEn: "True. Pulse checks are unreliable and must not delay compressions: after 10 seconds of uncertainty, begin."
        },
        {
          ...match("Associe chaque urgence pédiatrique à son intervention immédiate.", "Match each pediatric emergency with its immediate intervention.", [
            pair("Anaphylaxie", "Anaphylaxis", "Épinéphrine intramusculaire sans délai", "Intramuscular epinephrine without delay"),
            pair("Étouffement chez un bébé conscient", "Choking in a conscious infant", "5 tapes dorsales et 5 compressions thoraciques", "5 back blows and 5 chest thrusts"),
            pair("Convulsion en cours", "Ongoing seizure", "Protéger, position latérale, chronométrer", "Protect, side-lying position, time it"),
            pair("Choc hypovolémique", "Hypovolemic shock", "Bolus liquidien de 20 mL/kg selon l'ordonnance", "Fluid bolus of 20 mL/kg as ordered")
          ]),
          explFr: "Ces réflexes doivent être automatiques : en urgence pédiatrique, la fenêtre d'intervention est courte parce que les réserves de l'enfant sont faibles.",
          explEn: "These reflexes must be automatic: in pediatric emergencies, the window for action is short because a child's reserves are small."
        },
        {
          fr: "Pourquoi l'enfant se détériore-t-il plus brusquement que l'adulte une fois la compensation dépassée ?",
          en: "Why does a child deteriorate more abruptly than an adult once compensation is exhausted?",
          choices: [ch("Ses réserves physiologiques sont faibles : il compense longtemps, puis décompense très vite", "Their physiological reserves are small: they compensate for a long time, then decompensate very quickly", true), ch("Son cœur est plus fragile", "Their heart is more fragile"), ch("Il ressent moins la douleur", "They feel less pain"), ch("Ses organes sont plus gros proportionnellement", "Their organs are proportionally larger")],
          explFr: "C'est le principe clé de l'urgence pédiatrique : un enfant « qui a l'air correct » peut basculer en quelques minutes. La surveillance rapprochée n'est jamais excessive.",
          explEn: "This is the key principle of pediatric emergencies: a child who \"looks fine\" can crash within minutes. Close monitoring is never excessive."
        }
      ]
    }
  ]
}

];
/* ---- Textes de l'interface (bilingue) ---- */
const UI_TEXT = {
  fr: {
    appName: "PédiatrieQuest",
    tagline: "Deviens un pro des soins aux enfants",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Forme ultime atteinte !",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    year1Label: "1re année",
    year2Label: "2e année",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée — badge débloqué!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignante ou de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples, vrai/faux, associations et mises en situation cliniques." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "🧸", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "PédiatrieQuest",
    tagline: "Become a pro in caring for children",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Ultimate form reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    year1Label: "Year 1",
    year2Label: "Year 2",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered — badge unlocked!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice, true/false, matching and clinical scenario questions." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "🧸", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ----
   Seuils recalibrés sur le maximum réel de 5270 XP (voir VEHICLE_GROWTH plus haut) ;
   l'ancien seuil « Maître » à 3500 était hérité du moteur SASI et faisait plafonner
   l'avatar bien avant la fin des 180 questions (bug signalé par Jessica, 23 sept. 2026). */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 300,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 750,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1500, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 3000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 5270, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];
/* ---- Personnages d'avatar (créatures légendaires, évolutives) ----
   Chaque personnage est rendu par un emoji qui change de stade avec le XP
   (voir avatarEmoji() dans app.js). Les 12 stades correspondent aux
   avatarStage de LEVELS. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": [
   "🥚",
   "🥚",
   "🦎",
   "🦎",
   "🐲",
   "🐲",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉"
  ]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": [
   "🥚",
   "🥚",
   "🐴",
   "🐴",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄"
  ]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅"
  ]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "violet", hex: "#6b3fa0", name_fr: "Violet", name_en: "Purple" },
  { id: "turquoise", hex: "#0f8b8d", name_fr: "Turquoise", name_en: "Turquoise" },
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune soleil", name_en: "Sunny Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange vif", name_en: "Bright Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert menthe", name_en: "Mint Green" },
  { id: "rose",   hex: "#e5559c", name_fr: "Rose", name_en: "Pink" }
];

/* ---- Compatibilité du moteur ----
   Le moteur (app.js) est partagé avec les apps de métiers, où l'élève
   choisit une « machine » qui grossit avec le XP. PédiatrieQuest n'utilise
   pas cette mécanique : on conserve une entrée neutre et un objet vide pour
   les questions de type "hotspot" (aucune dans cette app). */
const VEHICLE_TYPES = [
  { id: "aucun", name_fr: "—", name_en: "—" }
];
// maxXP = XP max réellement atteignable pour un parcours parfait (180 questions,
// 10 compétences × 3 paliers × 6 questions) selon la formule de xpGained dans app.js.
// Si le contenu change (nb de questions/compétences), recalculer cette valeur —
// sinon l'avatar/véhicule plafonne trop tôt (bug signalé par Jessica, 23 sept. 2026).
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 5270 };
const CABIN_CONTROLS = {};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 5 compétences (palier Avancé)", desc_en: "Master 5 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 5 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 10 compétences du programme", desc_en: "Master all 10 competencies of the program",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Gardien des petits", name_en: "Little Ones' Guardian", icon: "🛡️",
    desc_fr: "Réussir le palier Débutant de Sécurité & prévention", desc_en: "Pass the Beginner tier of Safety & Injury Prevention",
    check: (state) => state.completed["securite_1"] && state.completed["securite_1"].score >= 70 },
  { id: "t_calcul", name_fr: "Tête à calcul", name_en: "Dose Master", icon: "🧮",
    desc_fr: "Maîtriser la compétence Médication & calcul de dose", desc_en: "Master the Medication & Dosage competency",
    check: (state) => (state.badges || []).includes("medication") },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 },
  { id: "t_ultime", name_fr: "Forme ultime", name_en: "Ultimate Form", icon: "🌟",
    desc_fr: "Faire évoluer ton avatar jusqu'à sa forme finale", desc_en: "Evolve your avatar to its final form",
    check: (state) => state.xp >= VEHICLE_GROWTH.maxXP }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un palmarès partagé
   sera branché. Le tableau de bord enseignant, lui, utilise Supabase. */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "licorne", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "dragon", avatarColor: "turquoise" },
  { name: "Sam D.", xp: 1780, avatarChar: "phenix", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "griffon", avatarColor: "rose" },
  { name: "Kevin R.", xp: 860, avatarChar: "dragon", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "licorne", avatarColor: "violet" },
  { name: "Tommy G.", xp: 120, avatarChar: "phenix", avatarColor: "vert" }
];
