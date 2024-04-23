let box=document.getElementById("box");
       let  mq=["“Believe you can and you're halfway there.” - Theodore Roosevelt",
    "“The only way to do great work is to love what you do.” - Steve Jobs",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill",
    "“It does not matter how slowly you go as long as you do not stop.” - Confucius",
    "“Your limitation—it's only your imagination.”",
    "“Push yourself, because no one else is going to do it for you.”",
    "“Great things never come from comfort zones.”"];

    let aq=["“Attitude determines altitude.”— Anonymous",
       "“…Attitude to me is more important than facts. It is more important than the past, than education, than money, than circumstances, than failures, than success, than what other people think, say or do. It is more important than appearance, gift, or skill. It will make or break a company…a church…a home. The remarkable thing is we have a choice every day regarding the attitude we will embrace for that day…I am convinced that life is 10% what happens to me and 90% how I react to it. And so it is with you… we are in charge of our attitudes.”-Charles Swindoll",
       "“Be who you are in every situation.”-— Michael Johnson",
       "“Attitude is a little thing that makes a big difference.”— Winston churchill"

]
let liq=[ "“There is nothing impossible to they who will try.”— Alexander the Great",
"“The bad news is time flies. The good news is you're the pilot.”— Michael Altshuler",
"“Life has got all those twists and turns. You've got to hold on tight and off you go.”— Nicole Kidman",
"“You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.”— Duchess Meghan",
"“I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.”— Taylor Swift",
"“You define your own life. Don't let other people write your script.”— Oprah Winfrey",
"“At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.”— Dr. Phil"
]
let lovq=["“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” – John Green",
"“Loved you yesterday, love you still, always have, always will”. – Elaine Davis",
"“I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.” – Angelita Lim",
"“I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.” – Elizabeth Barrett Browning",
"“The real lover is a man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.”– Marilyn Monroe",
"“In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.”– Maya Angelou",
"“I’ll be loving you, always with a love that’s true.”– Patsy Cline",
"“Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive. – Unknown",
"“I need you like a heart needs a beat.” – One Republic",
"“When I say I love you more, I don’t mean I love you more than you love me. I mean I love you more than the bad days ahead of us, I love you more than any fight we will ever have. I love you more than the distance between us, I love you more than any obstacle that could try and come between us. I love you the most.”-Unknown"
]
let confiqu=["“No one can make you feel inferior without your consent.” - Eleanor Roosevelt",

"“I can be changed by what happens to me. But I refuse to be reduced by it.” ­­-­ Maya Angelou",

 "“Because one believes in oneself, one doesn't try to convince. Because one is content with oneself, one doesn't need others' approval. Because one accepts oneself, the whole world accepts him or her.- Laozi",
 "“With realization of one's own potential and self-confidence in one's ability, one can build a better world.”- The Dalai Lama",

"“If you have no confidence in self, you are twice defeated in the race of life. With confidence, you have won even before you have started.”- Cicero",

"“Do not let what you cannot do interfere with what you can do.”- John Wooden",

"“People are like stained-glass windows. They sparkle and shine when the sun is out, but when the darkness sets in their true beauty is revealed only if there is light from within.” - Elisabeth Kubler-Ross",

"We gain strength, and courage, and confidence by each experience in which we really stop to look fear in the face ... we must do that which we think we cannot.”- Eleanor Roosevelt",

"“Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.” ­- Marie Curie",

"“You're never as good as everyone tells you when you win, and you're never as bad as they say when you lose.”- Lou Holtz",


"“Don't wait until everything is just right. It will never be perfect. There will always be challenges, obstacles and less than perfect conditions. So what? Get started now. With each step you take, you will grow stronger and stronger, more and more skilled, more and more self-confident, and more and more successful.”­- Mark Victor Hansen",

"Be courteous to all, but intimate with few, and let those few be well tried before you give them your confidence.” ­- George Washington",

"“If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced.”- Vincent Van Gogh",

"“Courage is resistance to fear, mastery of fear, not absence of fear.”- Mark Twain",

"“Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.” ­­- Bernard Baruch",

 "“It's not the lack of ability or opportunity that holds you back; it is only a lack of confidence in yourself.”— Richard Monckton Milnes"

]

        
        // const para=document.createElement("p");if I declare para here then only one quote will be shown, the previous quote will not be shown
        function motquo(){
        const para=document.createElement("p"); 
         para.innerText=mq[Math.floor(Math.random()*mq.length)];
         para.style.color="#2ecc71";
         box.append(para);
        }
       function attquo(){
          const para=document.createElement("p");
         para.innerText=aq[Math.floor(Math.random()*aq.length)];
         para.style.color="#800080";
         box.append(para);
       }
       function liquo(){
          const para=document.createElement("p");
         para.innerText=liq[Math.floor(Math.random()*liq.length)];
         box.append(para);
         para.style.color="#0a3d62";
       }
       function lovquo(){
          const para=document.createElement("p");
         para.innerText=lovq[Math.floor(Math.random()*lovq.length)];
         box.append(para);
         para.style.color="#8b0000";
       }
       function confquo(){
          const para=document.createElement("p");
         para.innerText=confiqu[Math.floor(Math.random()*confiqu.length)];
         box.append(para);
         para.style.color="#4169e1";
       }
       function clearText(){
       box.textContent="";
       }
