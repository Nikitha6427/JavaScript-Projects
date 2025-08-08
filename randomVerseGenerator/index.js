const verses  = [
    "Isaiah 40:31 - But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",

"Micah 7:7 - But as for me, I watch in hope for the LORD, I wait for God my Savior; my God will hear me.",

"Romans 5:3-4 - Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.",

"Romans 15:13 - May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",

"1 Corinthians 13:13 - And now these three remain: faith, hope and love. But the greatest of these is love.",

"Jeremiah 29:11 ~ For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",

"Romans 15:13 ~ May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",

"Romans 12:12 ~ Rejoice in hope, be patient in tribulation, be constant in prayer.",

"Hebrews 11:1 ~ Now faith is the assurance of things hoped for, the conviction of things not seen.",

"Isaiah 40:31 ~ But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",

"Romans 8:24-25 ~ For in this hope we were saved. Now hope that is seen is not hope. For who hopes for what he sees? But if we hope for what we do not see, we wait for it with patience.",

"1 Peter 1:3 ~ Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be bo rn again to a living hope through the resurrection of Jesus Christ from the dead.",
]
//to not use the same verse again and again
const usedIndexes = new Set()
const verseElement = document.getElementById("verse")

function generateVerse(){
    //to avoid from browser freezing
    if (usedIndexes.size >= verses.length){
        usedIndexes.clear()
        //just reseting value to 0
    }
    while(true){
        const randomIndex = Math.floor(Math.random()*verses.length)

        if (usedIndexes.has(randomIndex)) 
        continue //goes to top of loop
        const verse = verses[randomIndex]
        verseElement.innerHTML = verse;
        usedIndexes.add(randomIndex)
        break
    }
    
}