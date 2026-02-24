# MagVault Keyword Research — Full Conversation History

Extracted from DragonBot (OpenClaw) session logs.
Product: MagVault — magnetic TCG deck box by Paramint (Ballistic Brands).

Covers:
- Competitor ASIN selection and product research (Feb 11-12)
- Cerebro CSV processing into keyword workbook (Feb 17)
- Google Sheets workbook creation, formatting, fixes (Feb 17)
- Root keywords, never keywords, master list, single words (Feb 17-18)
- Amazon listing text compilation (Feb 18)
- PPC campaign setup sheet (Feb 18)

---

## 2026-02-11

**[14:16 UTC] Gershon:**

which supplier is creating the magvault for us ?

---

**[14:16 UTC] DragonBot:**

**IMD Cases** is the supplier creating the MagVault for you. They have a CM (contract manufacturing) agreement with Paramint for the magnetic TCG deck boxes. 🐉

---


## 2026-02-12

**[09:42 UTC] Gershon:**

ok dragonbot plz read this page carefully: <https://www.notion.so/ballisticbrands/Listing-keyword-research-Titan-Helium10-350945b0dfd5475abaf7a627d21822f5?source=copy_link> there's also a video there - can you watch it ? or at least read its transcript ? (it's on loom, there's an automatically generated transcript). lmk which is easiest / cheaper on tokens - I can copy/paste the transcript if needed. after that I'd like for you to actually do this keyword research for us.

---

**[09:43 UTC] DragonBot:**

Can't get the transcript programmatically — Loom keeps it behind their app/auth.

Here's the situation:

**What I already have from the Notion page:**
The full 23-step SOP is written out in detail. I understand the process clearly:
1. Find 10 competitor ASINs
2. Use H10 Cerebro to pull their keywords
3. Filter & organize in the TitanWay spreadsheet template
4. Extract root keywords → Master list → Frankenstein → Single Words

**Regarding the videos:**
- I can't watch them or pull transcripts — Loom requires auth
- **Cheapest option: you copy/paste the transcript** from the intro video. Loom shows it in the sidebar — just click "Transcript" and copy it over
- But honestly, the written steps in Notion are already very detailed

**Regarding doing the keyword research:**
Here's what I *can* do with my current tools:
- ✅ Find competitor ASINs via **Keepa** (search + product data)
- ✅ Pull keyword data via **Keepa** (though Cerebro/H10 has more granular KW data)
- ✅ Create/populate a Google Sheet via **Zapier/Composio**
- ❌ I don't have Helium 10 access (Cerebro, Frankenstein, XRay)

**Do you have a Helium 10 API key or MCP connection?** That's the missing piece. Without it, I can do a version of the research using Keepa's keyword data, but it won't be the same as the H10 workflow.

What product are we doing this for? And do you want me to work with Keepa data or get H10 connected first? 🐉

---

**[09:47 UTC] Gershon:**

let's do it with keepa data, but first, let me give you my notes from the full titan kw research course: <https://www.notion.so/ballisticbrands/Gershon-s-Titan-keyword-research-notes-15421b023d03416aa05ed9239e68fd7a?source=copy_link> and more importantly (this overrides my notes), the transcript of the video explaining how to do it: 0:02 Hi all, so today I wanted to show you how to do keyword research. So as you may already know, there is the Titan training, which you can find here. 0:15 This is the SOP in which the video I'm filming right now will be included. So there is the link to the Titan videos. 0:27 I also wrote some notes over here if you want to take a look at them as you watch the videos. 0:34 If you're unfamiliar with keyword research, please do the Titan course. So you understand what the theory is. So there will be this introduction video, which I'm explaining to you right now, which will go more over the theory and how we're going to do things differently than Titan. 0:56 And then I will also do another video in which we will actually, I will actually show myself doing the keyword research for for the CardVault product. 1:09 For the Titan videos, you can follow along by watching, by looking at the MTG, at the PlayMat keyword research sheet specifically, because this one was done by the book. 1:22 This one was done exactly like the Titan videos, like the Titan course. So I recommend if this is the first time, or if you need a refresher, watch the Titan videos and look at the sheet we did over here for the playmats. 1:38 Now, the way, if I had to explain in short what the Titan method for keyword research is, the way it works is you you uh take the uhm your 10 best competitors, okay, you run them through a tool called List and Keyword Research Tool. 2:02 provided by Titan, now we use Helium 10, we no longer use Titan's tools, so uhm there is an equivalent, you know if Titan is using uhm, if Titan is using something called Keyword Relevancy Tool. 2:21 We use something called Cerebro by Helium 10, ok? Uhm, so we're gonna go through these steps and I'm gonna show you in the next video specifically how I do them, but first, as I mentioned, the theory, ok? 2:36 So the theory of uh Listen Keyword Research is that you find your top 10 competitors, the top 10 experts, ASINs, you make sure they're like your product, ok? 2:45 Like if uh if you're selling playmats that are 24x14, you wanna look for the top 10 playmats that are 24x14, maybe with the same design that you're trying to sell. 2:56 If it's a card vault, you're looking for card vaults, uh same as the one that you're trying to sell. Take the top 10 ASINs, you run them through the Keyword Relevancy Tool, in Titan it's called Keyword Relevancy Tool, with us it's called Cerebro, ok? 3:12 And this tool is gonna spit out for you a list that looks like this. That looks like this over here, with all of the keywords that were generated from the top 10 competitors. 3:36 So here I did a specific list. Let me show you specifically for the CardVault products, I took the, I had a sheet with the top 10 competitors, these top 10 ASINs, I fed them to to the tool, and it gave me this list of keywords after some filtering, which I will show you in the next video. 4:04 Then, the next step in the process is, after we have this list generated from the 10 ASINs, we want to start uhm finding the root keywords, okay? 4:14 The root keywords, and the never keywords, okay? This is what, how the Titan training explains it, this is how I did it as well for the card vault, okay? 4:26 When we do, when we go through the keywords, and find the root keywords, we also find the never keywords, and we organize them here, into the root keywords, and the never keywords. 4:36 That's the third step. Okay, first was finding the competitors, then extracting the keywords, what we did over here. Then the third step is finding the root keywords, and the never keywords. 4:48 Now, Titan has a fourth step, in which they organize all of the raw keywords, by root keywords. So for example, my first root keyword is card vault. 4:59 So they would have another sheet over here, called card organizer, and all the keywords from over here, that are uhm, that would be caught by the root keyword card organizer, they would put them over here. 5:13 Then they would split, they would have a different sheet for each, for each root keyword, so they'd have another sheet for card storage, another sheet for card boxes, and then all of the words from the raw, that belong to each one of those keywords, would be under a different one. 5:30 We do not need to do this step, it's a bit of an overkill, uh in my opinion, and honestly I don't see like how it's gonna be used in PPC or anywhere else. 5:39 So we can skip that, okay, that's the fourth step that Titan does, we do not do it. Then the final step is to take this raw list, and make it into the master list, over here, okay. 5:54 Uh, the only filtering that still needs to be done, is just to remove the uhm, the never keywords. So literally what you do, and I will show it to you in the next video, is you copy all the words from over here, to the uhm master list, okay, and then you look at your never keywords, and you search for 6:15 them, one by one. Over here, and if you find any of the never keywords, over here, you just delete the line. 6:24 The very final step, okay, would be just to uhm extract the single words. For that, you have a tool in uhm in uh Helium 10, called Frankenstein, like the monster. 6:38 It's exactly the same as the tool used to by uh uh Titan. It's exactly the same. What you do, and we will show you in the next video, you just take the master list, you copy all of it into Frankenstein, and Frankenstein exports the words by uh the most frequent to the least frequent. 6:58 And that's it, that's the keyword research. If I had to give some tips, is that remember that it's not an exact science. 7:06 What you have to think about in the end, is that you want a good master list, you want a good root keywords list, The way these things are gonna be used, these three lists, are gonna be used in the PPC, that we're gonna do, and also in the list building. 7:26 So for example, the title, and stuff like that, but forget about the title for a second, and the words that appear in the listing. 7:33 In the PPC, what we're gonna do is, we're simply going to use the words from the master list, to do an exact search, okay, if you don't know what the difference between exact, phrase, and broad PPC matches are, you can read online, as part of the PPC training course, Titan also has a video about that 7:54 , but if you do not understand, just try to understand from the context, what we're gonna do is, we're gonna take the master list, we're gonna do an exact match, on each of these keywords, for the PPC, and we're gonna remove, that's one thing, then another PPC campaign, we're gonna take the root keywords 8:17 , and we're gonna do a broad match on these words. Okay, so exact match means that, anybody who searches exactly those words, we're gonna target them, somebody searches exactly Pokemon card organizer, we're gonna match it, okay, a broad match, means, if anybody is searching for, card organizer box for 8:42 Pokemon, it's gonna match it, you know, if there's words before, after, between, or even if there is a misspelling, okay, that's a broad match, we're gonna match that as well, that's the second campaign, we're gonna do a broad match on the root keywords minus the never keyword, so if somebody searches 9:02 card organizer tray, since that's in the never keyword, it's not going to show up, but if somebody searches card organizer box for Pokemon, it is going to show up, uh so right now, really if I had to summarize, it's not an exact science, always understand what you do and how it's going to be used in 9:22 the end in the PPC, okay, try to understand the product for each of those words over here, try to understand if this is the product that we're looking for, okay, if uh if if this is our product that the customer was looking for, or a different product, and from that understand what the root keywords 9:40 are, what the never keywords are, and later on build the master list, uh and I'll show you exactly how I did it for this product in the next video. plz read this carefully, and let me know once you understand it. lmk if you have any questions.

---

**[09:47 UTC] DragonBot:**

Got it. I've now read everything. Here's my understanding:

**The Keyword Research Process (Ballistic Brands method):**

1. **Find top 10 competitors** — ASINs of products very similar to yours (same size, type, design theme)
2. **Run them through Cerebro (H10)** — or equivalent tool — to extract all keywords those competitors rank for
3. **Filter the raw keyword list** — remove irrelevant junk
4. **Identify Root Keywords** — the core search terms (e.g., "card vault", "card organizer", "card storage box"). These are the broad concepts.
5. **Identify Never Keywords** — terms that indicate a *different* product (e.g., "tray" if you're selling a box). These get excluded.
6. **Build the Master List** — copy raw keywords, remove any lines containing never keywords
7. **Extract Single Words** — run master list through Frankenstein (or equivalent) to get individual words sorted by frequency
8. **Skip Titan's Step 4** — no need to split keywords by root keyword into separate sheets (overkill per Gershon)

**How these lists get used:**
- **Master List** → PPC **exact match** campaigns (target each keyword exactly)
- **Root Keywords** → PPC **broad match** campaigns (minus never keywords as negatives)
- **Single Words** → listing optimization (title, bullets, backend)

**What I can do with Keepa instead of H10:**
- Keepa has keyword search data and can find top competitors by category/search term
- I can pull competitor ASINs, their keywords, and search volumes
- I'll build the raw list, identify root/never keywords, create the master list, and extract single words
- Output goes into a Google Sheet (via Zapier/Composio)

No questions — the process is clear. **Which product are we doing this for?** 🐉

---

**[09:49 UTC] Gershon:**

ok, let's do it through zapier for now. plz see this kw research sheet as an example: <https://docs.google.com/spreadsheets/d/1PAuia4oHJ6cWg5qGl7ElE_SRXs-UYekcHhBEoj4OvLg/edit?gid=652198381#gid=652198381> look through it, make sure you understand how this sheet was made using our process.

---

**[09:51 UTC] DragonBot:**

Now let me get the Root Keywords and Master List tabs:

---

**[10:03 UTC] Gershon:**

look at these sheets: *ASINs* *Raw* *1. Root Keywords* *2. "Never" KWs* *3.2. Master List* *3.3 Single Words - Listing Keywords*

---

**[10:05 UTC] DragonBot:**

Now let me get the Never KWs, Master List, and Single Words tabs:

---

**[10:06 UTC] DragonBot:**

The tab name from earlier was `2. \` — let me try the Master List and Single Words instead, and come back to Never KWs:

---

**[10:09 UTC] Gershon:**

right. now if I give you 10 asins and explains to you about our product (what it is and what it isn't) - could you do a kw research like that for us ?

---

**[10:10 UTC] DragonBot:**

Yes, here's what I can do and where the gaps are:

| Step | H10 Method | What I Can Do (Keepa) | Gap? |
|------|-----------|----------------------|------|
| **1. Competitor ASINs** | H10 XRay | ✅ Keepa product data (price, BSR, sales, ratings, revenue) | None — you're giving me the ASINs |
| **2. Extract keywords from ASINs** | Cerebro (reverse ASIN lookup) | ⚠️ Keepa doesn't do reverse ASIN → keyword lookup | **This is the big gap** |
| **3. Root Keywords** | Manual from raw list | ✅ I can identify root keywords from whatever keyword data we get | None |
| **4. Never Keywords** | Manual based on product understanding | ✅ I can do this if you describe the product | None |
| **5. Master List** | Raw minus never KWs | ✅ Filtering logic, easy | None |
| **6. Single Words** | Frankenstein | ✅ I can do word frequency analysis myself | None |

**The honest answer:** Steps 3-6 I can do well. Step 1 you're giving me. The bottleneck is **Step 2** — getting the raw keyword list from competitor ASINs.

**Options for Step 2:**
1. **You run Cerebro** on the 10 ASINs and paste/share the CSV → I do everything else
2. **Keepa keyword search** — I search for keywords related to your product and build a list from search volume data (different methodology, less comprehensive than Cerebro)
3. **Get H10 API access** — if they have one, I could automate the whole thing

My recommendation: **Option 1** is fastest and most accurate. You run Cerebro once (~2 min), share the export, and I'll handle the rest — root keywords, never keywords, master list, single words, and put it all in a Google Sheet.

What do you think? 🐉

---

**[10:12 UTC] DragonBot:**

**No, Keepa does NOT have reverse ASIN → keyword lookup.** 

The only keyword-related fields are:
- `itemTypeKeyword` — Amazon's internal product type keyword (e.g., "playmats")
- `targetAudienceKeyword` — target audience

There's no equivalent to Cerebro's "show me all keywords this ASIN ranks for." Keepa is primarily a **price/sales tracker**, not a keyword tool.

**So for the keyword research, we have two real options:**

1. **You run Cerebro on the 10 ASINs** → share the CSV → I do all the analysis (root KWs, never KWs, master list, single words, Google Sheet)

2. **We get H10 API access** — Helium 10 does have an API, but it's enterprise-tier and expensive

I'd go with option 1. It's 2 minutes of your time in H10, and I handle the rest. 🐉

---

**[10:22 UTC] Gershon:**

aight the product we wanna do the kw research for is the magvault. what do you know about the magvault ?

---

**[10:34 UTC] Gershon:**

1. yes it's a tcg deck box that has magnetic closures - it feels very premium. made of hardened plastic with a PU leather cover on all sides. much more premium than competitors. the covers also come with different designs (as is the feature with all of our products - we have mats and sleeves, both of which come in different designs, that's how we capture market share). note tho - just like the other products, we're gonna be releasing this product under paramint, wizcraft, and tcgware. we have these different brands in order to safeguard ourselves from amazon shutting down accounts. (if one gets shut down, we still have the two other accounts). it's for all TCG's but customers are most primarily MTG customers. 2. answered in previous question. it's also quite spacious (easily holds 100 double sleeved cards plus room for tokens) 3. it does NOT have a dice tray. HOWEVER, we will be releasing the MagDiceTray at the same time - which is a magnetically attached extension to the magvault which is a dice tray. so I do want to inclue "dice tray" (and variations) in the listing text, because I want people who search for "dice tray" as well to see our listings - because it's relevant to them. 4. no 5. "realm guard" also has the same playbood - they release many tcg products in different designs. they have the "vault" tcg deck box (comes in different designs) - here's an example asin: B0F7H1G52K. here are some other ASINs of other companies playing the same playbood: B0F9XYRSFF B0FN47FNRM B0D264D63X a. include asins from 10 different brands (if you can find). for each brand - get their most popular deck box design. make sure you only get brands who have deck boxes in different designs of course first step - suggest relevant asins to me that we'll use for the kw research

---

**[10:35 UTC] DragonBot:**

Got the category best sellers. Let me pull data on the top ones to find deck boxes with designs:

---

**[10:36 UTC] DragonBot:**

Now let me get data on the ones you gave me plus find the right competitors — I need deck boxes with **designs** (PU leather, magnetic, ~100 cards, premium):

---

**[10:36 UTC] DragonBot:**

Here's my proposed list of **10 competitor ASINs** from 10 different brands — all TCG deck boxes with multiple design variations:

| # | ASIN | Brand | Price | BSR | Monthly Sold | Key Features |
|---|------|-------|-------|-----|-------------|--------------|
| 1 | **B0F7H1G52K** | Realm Guard | $19.99 | 67,915 | - | The Vault, PU leather, 100+ cards, your direct comp |
| 2 | **B0C6MRJ68R** | ZLCA | - | 525 | - | PU leather, 39 designs, 150+ cards, commander display |
| 3 | **B0D28H7H3Y** | Mage Tech | $26.99 | 974 | 600/mo | Patented design, commander display, dice tray, 16 designs |
| 4 | **B0CRCXY9Z2** | Jaffzora | $11.99 | 1,982 | 100/mo | PU leather, magnetic, 19 designs, 100 double-sleeved |
| 5 | **B0DQL4FVW5** | UAONO | - | 1,561 | - | Commander display, 10 designs, 100+ double-sleeved |
| 6 | **B0D6RLGJPL** | AFIING | $12.99 | 2,770 | 200/mo | 21 designs, commander display, 100 double-sleeved |
| 7 | **B0FN47FNRM** | Venssu | $19.99 | - | 700/mo | PU leather, magnetic, retro gaming look, 7 designs |
| 8 | **B0FH4ZTJ4Y** | Fabmaker | - | 3,564 | - | Commander display + dice tray, 11 designs |
| 9 | **B0C3L38KDM** | Arkeiliy | $9.99 | 4,050 | 100/mo | 17 designs, budget option |
| 10 | **B0F9XYRSFF** | Black Lotus | $22.99 | 308,421 | - | PU leather, premium, Starry Night design |

**Notable observations:**
- **Mage Tech** (B0D28H7H3Y) is the top dog — BSR 974, 600/mo, $26.99, has dice tray
- **ZLCA** has the most designs (39!) at BSR 525
- **Fabmaker** already includes a dice tray — similar to your MagDiceTray concept
- Price range is $10-$27 — where are you planning to price the MagVault?
- The "Black Lotus" one is weak (BSR 308K) but I included it since you suggested it

Want to swap any of these, or should I proceed with this list for the Cerebro run? 🐉

---

**[11:09 UTC] Gershon:**

more notes: • when you reference an ASIN - also include a link (preferably just make the ASIN text a link to the product) • there are more features about deck boxes in general that I haven't told you about: ◦ some have a window to show the front card (also referred to as the commander) - our does have a window ◦ some have (or do not have) art on them - we only care about ones that have art on them ◦ some allow you to put one deck (~100 cards), some allow you to put multiple decks - we only care about single deck deck boxes (ours is a single deck one as well) ◦ some have dice trays and some do not. we have an optional dice tray as a separate product (the magdicetray - it connects magnetically to the magvault - so that you can have one dice tray and many magvaultes and just move the magdice box from one to the other) • let's find competing ASINs: a. only art deck boxes b. only for single deck c. at least 5 w/ window d. at least 5 w/ dice tray ◦ at least 5 w/o window or dice tray ◦ preferably from different brands (different brands have different KW templates they use, we don't want to include all ASINs from a single brand - this way we will only get one KW template) ◦ if a brand has multiple designs (which all of them probably do) - get their strongest ASIN in that category • example products: 1. <https://www.amazon.com/Appearance-Commander-Magnetic-Dividers-Compatible/dp/B0FN47FNRM/ref=sr_1_18?crid=2RK9HUY8CE4PD&amp;dib=eyJ2IjoiMSJ9.hW5YoRSVlBK-Oxx4KS8MFDiKimQFCwqSmX2xtNooyHKbhxBRQOuCWa819nGob9tsW6MNE_rQhP1xDKcgj_8T2jQi1yg778FxYUfcmD_WrFrv3Dh2Mb-L-g7QIq1H6WKA290XOVaSl2oHdCy7nUVaAiQrhNLEmuJgmPnEXe9z5r7LLqAc5XqlCx-i4uuEInnq0WDvgJSbD-qThTzw28pWaN0ZfDjHZRCvKUH_yEfXuhw2QPStgAg4xdSLUgCgJ5blfBTEsHd1yb0dsMR8Hhyp_D6gCXJ5_W8j8eWyIO-eop4.JOCoU9tNtGtJPCk303Qq3yEcHylvr_xYOf9lSTplnEk&amp;dib_tag=se&amp;keywords=art%2Btcg%2Bdeck%2Bbox&amp;qid=1770892370&amp;sprefix=art%2Btcg%2Bdeck%2Bb%2Caps%2C364&amp;sr=8-18&amp;th=1|B0FN47FNRM> 2. <https://www.amazon.com/Realm-Guard-Vaults-Boxes-Complete/dp/B0FWBM3FL3/ref=sr_1_6?crid=2RK9HUY8CE4PD&amp;dib=eyJ2IjoiMSJ9.hW5YoRSVlBK-Oxx4KS8MFDiKimQFCwqSmX2xtNooyHKbhxBRQOuCWa819nGob9tsW6MNE_rQhP1xDKcgj_8T2jQi1yg778FxYUfcmD_WrFrv3Dh2Mb-L-g7QIq1H6WKA290XOVaSl2oHdCy7nUVaAiQrhNLEmuJgmPnEXe9z5r7LLqAc5XqlCx-i4uuEInnq0WDvgJSbD-qThTzw28pWaN0ZfDjHZRCvKUH_yEfXuhw2QPStgAg4xdSLUgCgJ5blfBTEsHd1yb0dsMR8Hhyp_D6gCXJ5_W8j8eWyIO-eop4.JOCoU9tNtGtJPCk303Qq3yEcHylvr_xYOf9lSTplnEk&amp;dib_tag=se&amp;keywords=art%2Btcg%2Bdeck%2Bbox&amp;qid=1770892370&amp;sprefix=art%2Btcg%2Bdeck%2Bb%2Caps%2C364&amp;sr=8-6&amp;th=1|B0FWBM3FL3> 3. <https://www.amazon.com/Ai-Armor-Starry-Commander-Storage/dp/B0DSJQYWLG/ref=ast_sto_dp_puis?th=1|B0DSJQYWLG> 4. <https://www.amazon.com/Black-Lotus-Trading-Portable-Holding100/dp/B0F9XYRSFF/ref=sr_1_7?crid=2RK9HUY8CE4PD&amp;dib=eyJ2IjoiMSJ9.hW5YoRSVlBK-Oxx4KS8MFDiKimQFCwqSmX2xtNooyHKbhxBRQOuCWa819nGob9tsW6MNE_rQhP1xDKcgj_8T2jQi1yg778FxYUfcmD_WrFrv3Dh2Mb-L-g7QIq1H6WKA290XOVaSl2oHdCy7nUVaAiQrhNLEmuJgmPnEXe9z5r7LLqAc5XqlCx-i4uuEInnq0WDvgJSbD-qThTzw28pWaN0ZfDjHZRCvKUH_yEfXuhw2QPStgAg4xdSLUgCgJ5blfBTEsHd1yb0dsMR8Hhyp_D6gCXJ5_W8j8eWyIO-eop4.JOCoU9tNtGtJPCk303Qq3yEcHylvr_xYOf9lSTplnEk&amp;dib_tag=se&amp;keywords=art+tcg+deck+box&amp;qid=1770892370&amp;sprefix=art+tcg+deck+b%2Caps%2C364&amp;sr=8-7|B0F9XYRSFF> - very weak product - find 5 more in addition to it • <https://www.amazon.com/UAONO-Trading-Storage-Commander-Dividers/dp/B0D264D63X/ref=sr_1_17?crid=2RK9HUY8CE4PD&amp;dib=eyJ2IjoiMSJ9.hW5YoRSVlBK-Oxx4KS8MFDiKimQFCwqSmX2xtNooyHKbhxBRQOuCWa819nGob9tsW6MNE_rQhP1xDKcgj_8T2jQi1yg778FxYUfcmD_WrFrv3Dh2Mb-L-g7QIq1H6WKA290XOVaSl2oHdCy7nUVaAiQrhNLEmuJgmPnEXe9z5r7LLqAc5XqlCx-i4uuEInnq0WDvgJSbD-qThTzw28pWaN0ZfDjHZRCvKUH_yEfXuhw2QPStgAg4xdSLUgCgJ5blfBTEsHd1yb0dsMR8Hhyp_D6gCXJ5_W8j8eWyIO-eop4.JOCoU9tNtGtJPCk303Qq3yEcHylvr_xYOf9lSTplnEk&amp;dib_tag=se&amp;keywords=art%2Btcg%2Bdeck%2Bbox&amp;qid=1770892370&amp;sprefix=art%2Btcg%2Bdeck%2Bb%2Caps%2C364&amp;sr=8-17&amp;th=1|B0D264D63X>

---

**[11:09 UTC] DragonBot:**

Got it — great context on the MagVault features. Let me pull data on all 5 example ASINs first, then search for more competitors.

---

**[11:09 UTC] DragonBot:**

Now let me search for more competing ASINs across different categories (window, dice tray, basic art).

---

**[11:10 UTC] DragonBot:**

Good data on the 5 examples. Now I need to find more competitors. Let me search for art deck boxes across the categories you specified.

---

**[11:11 UTC] DragonBot:**

The ZLCA/Venssu results are mostly plain-colored, not art deck boxes. Let me search specifically for art-print deck boxes and look at different brands.

---

**[11:12 UTC] DragonBot:**

Let me take a more targeted approach and browse Amazon product pages to find more art deck box competitors.

---

**[11:12 UTC] DragonBot:**

Let me try Keepa with different search terms to find art deck boxes.

---

**[11:15 UTC] DragonBot:**

Good finds! Let me pull data on the most promising art deck box candidates and verify features.

---

**[11:18 UTC] DragonBot:**

Here's what I found — I'll be straight with you:

**Your 5 examples:**

| ASIN | Brand | Type | Price | Sales/mo |
|------|-------|------|-------|----------|
| [B0FN47FNRM](https://amazon.com/dp/B0FN47FNRM) | Venssu | Art + Window | $19.99 | 700 |
| [B0FWBM3FL3](https://amazon.com/dp/B0FWBM3FL3) | Realm Guard | Art + Window + Dice (Vault) | $19.99 | 50 |
| [B0DSJQYWLG](https://amazon.com/dp/B0DSJQYWLG) | Realm Guard | Art + Window + Dice | $35.99 | — |
| [B0F9XYRSFF](https://amazon.com/dp/B0F9XYRSFF) | Black Lotus Trading | Basic Art | $22.99 | — |
| [B0D264D63X](https://amazon.com/dp/B0D264D63X) | UAONO | Basic Art | $12.99 | 100 |

**New competitors I found:**

🪟 **Art + Window/Dice Tray:**

| ASIN | Brand | Type | Price | Sales/mo |
|------|-------|------|-------|----------|
| [B0F4XFZTP5](https://amazon.com/dp/B0F4XFZTP5) | Kabinka | Art (metal emblem) + Window + Dice | $23.99 | 100 |
| [B0FW9LFYM4](https://amazon.com/dp/B0FW9LFYM4) | Realm Guard | Art + Window + Dice (Vault, strongest) | $19.99 | 100 |

🎨 **Basic Art (no window/dice):**

| ASIN | Brand | Type | Price | Sales/mo |
|------|-------|------|-------|----------|
| [B0DSLJWFFS](https://amazon.com/dp/B0DSLJWFFS) | SleeveChief | "China To Go!" holo art | $19.90 | 800 |
| [B0CN4R9ZWG](https://amazon.com/dp/B0CN4R9ZWG) | sabermaster | Anime/gaming art print | $9.99 | 100 |
| [B0CJQYGLL4](https://amazon.com/dp/B0CJQYGLL4) | PROMAXIBINDER | Black Lotus embossed art | $8.99 | 400 |
| [B0FM27YDKR](https://amazon.com/dp/B0FM27YDKR) | UAONO | Lotus art (strongest art ASIN) | $13.99 | 200 |
| [B0C7ZZVP9D](https://amazon.com/dp/B0C7ZZVP9D) | ZLCA | Emperor Dragon art | $11.99 | 50 |

**⚠️ The honest gap:** Art deck boxes with window/dice tray features are extremely niche. Realm Guard is basically the only brand doing full hand-drawn art + window + dice storage. Most window/dice tray boxes (Mage Tech, ZLCA, Stepane) are plain-colored — not art.

**My suggestion:** For the window and dice tray categories, you may want to:
1. Include a few **non-art** competitors with those features (like [B0CDFZPFRV](https://amazon.com/dp/B0CDFZPFRV) Mage Tech, 600/mo, $26.99 — window + dice tray) since they'll rank for the same feature keywords
2. Or accept that the window/dice tray art niche is so small that fewer competitors is fine

Want me to pull any of these up in more detail, or want to browse Amazon yourself to fill the window/dice tray gaps? Also — do you have the MagVault ASIN(s) yet?

---

**[11:25 UTC] Gershon:**

plz give me the ASINs from the 3 categories in comma separated format ("ASIN1,ASIN2,...") we're gonna include ASINs from different categories in the 10 ASINs we do kw research on we're not gonna include any non-art stuff

---

**[11:25 UTC] DragonBot:**

**Window + Dice Tray (art):**
`B0FN47FNRM,B0FWBM3FL3,B0DSJQYWLG,B0F4XFZTP5,B0FW9LFYM4`

**Basic Art (no window/dice):**
`B0F9XYRSFF,B0D264D63X,B0DSLJWFFS,B0CN4R9ZWG,B0CJQYGLL4,B0FM27YDKR,B0C7ZZVP9D`

**All combined:**
`B0FN47FNRM,B0FWBM3FL3,B0DSJQYWLG,B0F4XFZTP5,B0FW9LFYM4,B0F9XYRSFF,B0D264D63X,B0DSLJWFFS,B0CN4R9ZWG,B0CJQYGLL4,B0FM27YDKR,B0C7ZZVP9D`

12 total across both categories. Pick your 10 from these — I'd suggest dropping the two weakest (B0F9XYRSFF and B0C7ZZVP9D, both have minimal/no sales).

---

**[11:26 UTC] DragonBot:**

**Window + Dice Tray (art):**
`B0FN47FNRM|B0FWBM3FL3|B0DSJQYWLG|B0F4XFZTP5|B0FW9LFYM4`

**Basic Art (no window/dice):**
`B0F9XYRSFF|B0D264D63X|B0DSLJWFFS|B0CN4R9ZWG|B0CJQYGLL4|B0FM27YDKR|B0C7ZZVP9D`

**All combined:**
`B0FN47FNRM|B0FWBM3FL3|B0DSJQYWLG|B0F4XFZTP5|B0FW9LFYM4|B0F9XYRSFF|B0D264D63X|B0DSLJWFFS|B0CN4R9ZWG|B0CJQYGLL4|B0FM27YDKR|B0C7ZZVP9D`

---

**[11:28 UTC] Gershon:**

I'm thinking of going with these ASINs: B0FN47FNRM

---

**[11:28 UTC] DragonBot:**

Looks like your message got cut off — I only see B0FN47FNRM. Send the full list and I'll confirm the details on all of them.

---

**[11:35 UTC] Gershon:**

I'm thinking of going with these ASINs: B0FN47FNRM B0FWBM3FL3 - RG w/ dice tray B0DSJQYWLG - another RG w/ dice tray B0D264D63X - uaono B0FW9LFYM4 - RG w/o dice tray B0DSLJWFFS B0CN4R9ZWG B0FM27YDKR - another uaono but as you can see there's some duplicates from the same brands here ..... (e.g. B0FWBM3FL3/B0DSJQYWLG, including B0FW9LFYM4 is okay - it's a different product - it doesn't have a dice tray). the B0FM27YDKR/B0D264D63X are also problematic - same product from same brand - just different design. let's try to find some more products. put all of the ones I wanted to include in a table (along with price/brand/type/sales per month) and another table for new relevant products that you find.

---

**[11:38 UTC] DragonBot:**

Here are the two tables:

**📋 Your Selected ASINs:**

| # | ASIN | Brand | Type | Price | Sales/mo | Issue |
|---|------|-------|------|-------|----------|-------|
| 1 | [B0FN47FNRM](https://amazon.com/dp/B0FN47FNRM) | Venssu | Art + Window | $19.99 | 700 | ✅ |
| 2 | [B0FWBM3FL3](https://amazon.com/dp/B0FWBM3FL3) | Realm Guard | Art + Window + Dice (Vault) | $19.99 | 50 | ⚠️ Same brand as #3 & #5 |
| 3 | [B0DSJQYWLG](https://amazon.com/dp/B0DSJQYWLG) | Realm Guard | Art + Window + Dice | $35.99 | — | ⚠️ Same brand as #2 & #5 |
| 4 | [B0D264D63X](https://amazon.com/dp/B0D264D63X) | UAONO | Basic Art | $12.99 | 100 | ⚠️ Same brand as #8 |
| 5 | [B0FW9LFYM4](https://amazon.com/dp/B0FW9LFYM4) | Realm Guard | Art + Window (Vault, no dice) | $19.99 | 100 | ✅ Different product |
| 6 | [B0DSLJWFFS](https://amazon.com/dp/B0DSLJWFFS) | SleeveChief | Basic Art (holo) | $19.90 | 800 | ✅ |
| 7 | [B0CN4R9ZWG](https://amazon.com/dp/B0CN4R9ZWG) | sabermaster | Basic Art (anime) | $9.99 | 50 | ✅ |
| 8 | [B0FM27YDKR](https://amazon.com/dp/B0FM27YDKR) | UAONO | Basic Art (lotus) | $13.99 | 200 | ⚠️ Same brand as #4 |

**🆕 New Candidates to Replace Duplicates:**

| ASIN | Brand | Type | Price | Sales/mo | Notes |
|------|-------|------|-------|----------|-------|
| [B0F4XFZTP5](https://amazon.com/dp/B0F4XFZTP5) | Kabinka | Art (metal emblem) + Window + Dice | $23.99 | 100 | Lotus emblem, hidden dice tray |
| [B0CJQYGLL4](https://amazon.com/dp/B0CJQYGLL4) | PROMAXIBINDER | Basic Art (embossed Black Lotus) | $8.99 | 400 | Pressure embossed MTG art |
| [B0C7ZZVP9D](https://amazon.com/dp/B0C7ZZVP9D) | ZLCA | Basic Art (Emperor Dragon) | $11.99 | 50 | Art variant of plain ZLCA line |
| [B0F84VLCB4](https://amazon.com/dp/B0F84VLCB4) | Cylvenor | Basic Art (Egyptian embossed) | $15.99 | 50 | 3D embossed ancient Egyptian |
| [B0F5SCZYG9](https://amazon.com/dp/B0F5SCZYG9) | Ultra Pro | Basic Art (Final Fantasy) | $9.45 | 50 | Official licensed character art |

My suggestion: swap one of the Realm Guard duplicates (#2 or #3) for **Kabinka** and one of the UAONOs (#4 or #8) for **PROMAXIBINDER**. That gets you 10 ASINs across 8 different brands.

---

**[11:43 UTC] Gershon:**

I searched for "tcg art deck box" and immediately found more relevant asins: B0DJXSD1TD B0CQ4V7NB2 B0G41JDRM7 B0D1K5NWTX B0FR49RRQY B0G3PQB2ZY B0D1JSJFB8 B0D44W4L3N B0D454KQWT B0DT42ML35 B0G7YDYJK8 plz look through them. look through their brands as well. find more relevant ASINs. find more relevant brands.

---

**[11:45 UTC] DragonBot:**

Great eye — these are legit art deck boxes I was missing. Here's the full picture:

**📋 Your 8 Selected ASINs:**

| # | ASIN | Brand | Type | Price | Sales/mo |
|---|------|-------|------|-------|----------|
| 1 | [B0FN47FNRM](https://amazon.com/dp/B0FN47FNRM) | Venssu | Art + Window | $19.99 | 700 |
| 2 | [B0FWBM3FL3](https://amazon.com/dp/B0FWBM3FL3) | Realm Guard | Art + Window + Dice (Vault) | $19.99 | 50 |
| 3 | [B0DSJQYWLG](https://amazon.com/dp/B0DSJQYWLG) | Realm Guard | Art + Window + Dice | $35.99 | — |
| 4 | [B0D264D63X](https://amazon.com/dp/B0D264D63X) | UAONO | Basic Art | $12.99 | 100 |
| 5 | [B0FW9LFYM4](https://amazon.com/dp/B0FW9LFYM4) | Realm Guard | Art + Window (Vault) | $19.99 | 100 |
| 6 | [B0DSLJWFFS](https://amazon.com/dp/B0DSLJWFFS) | SleeveChief | Basic Art (holo) | $19.90 | 800 |
| 7 | [B0CN4R9ZWG](https://amazon.com/dp/B0CN4R9ZWG) | sabermaster | Basic Art (anime) | $9.99 | 50 |
| 8 | [B0FM27YDKR](https://amazon.com/dp/B0FM27YDKR) | UAONO | Basic Art (lotus) | $13.99 | 200 |

**🆕 New Art Deck Box Brands & ASINs:**

| ASIN | Brand | Type | Price | Sales/mo | Variations | Notes |
|------|-------|------|-------|----------|------------|-------|
| [B0D1K5NWTX](https://amazon.com/dp/B0D1K5NWTX) | DEGDFSGR | Basic Art | $20.99 | — | 35 | Frog w/ Guitar, tons of creative art designs |
| [B0D44W4L3N](https://amazon.com/dp/B0D44W4L3N) | RMJKXQZG | Basic Art | $12.99 | — | 29 | Dark Gold Octopus, fantasy art |
| [B0CQ4V7NB2](https://amazon.com/dp/B0CQ4V7NB2) | CAPAUNVDA | Basic Art | $18.99 | — | 4 | Pirate Ship art |
| [B0D454KQWT](https://amazon.com/dp/B0D454KQWT) | KakapopoTCG | Basic Art (premium) | $29.99 | — | 5 | Japanese kimono-style "Deckimono" |
| [B0DJXSD1TD](https://amazon.com/dp/B0DJXSD1TD) | MTGPRO | Basic Art | $12.99 | 50 | 13 | Strongest: [B0DJXT2W1M](https://amazon.com/dp/B0DJXT2W1M) (100/mo) |
| [B0DT42ML35](https://amazon.com/dp/B0DT42ML35) | TCGUARD | Basic Art (patterned) | $15.99 | — | 12 | Art patterns on exterior |
| [B0DTJSCH59](https://amazon.com/dp/B0DTJSCH59) | sabermaster | Basic Art (White Dragon) | — | 100 | — | Stronger than B0CN4R9ZWG |
| [B0G41JDRM7](https://amazon.com/dp/B0G41JDRM7) | Venssu | Art + Window | $19.99 | 100 | — | "Wanted Poster" theme |
| [B0G7YDYJK8](https://amazon.com/dp/B0G7YDYJK8) | Venssu | Art + Window + Dice | $25.99 | — | 5 | Retro console w/ dice tray upgrade |
| [B0F4XFZTP5](https://amazon.com/dp/B0F4XFZTP5) | Kabinka | Art (emblem) + Window + Dice | $23.99 | 100 | — | Metal Lotus emblem |
| [B0CJQYGLL4](https://amazon.com/dp/B0CJQYGLL4) | PROMAXIBINDER | Basic Art (embossed) | $8.99 | 400 | — | Black Lotus embossed art |

Key new brands worth considering: **DEGDFSGR** (35 art designs), **RMJKXQZG** (29 art designs), **KakapopoTCG** (premium Japanese art), **MTGPRO** (100/mo). These could replace the duplicate Realm Guards and UAONOs to get more diverse keyword templates.

---

**[11:54 UTC] DragonBot:**

Here's the full combined table of all ASINs:

| # | ASIN | Brand | Type | Price | Sales/mo | Notes |
|---|------|-------|------|-------|----------|-------|
| 1 | [B0FN47FNRM](https://amazon.com/dp/B0FN47FNRM) | Venssu | Art + Window | $19.99 | 700 | ✅ |
| 2 | [B0FWBM3FL3](https://amazon.com/dp/B0FWBM3FL3) | Realm Guard | Art + Window + Dice (Vault) | $19.99 | 50 | ⚠️ RG #1 — same brand as #3 & #5 |
| 3 | [B0DSJQYWLG](https://amazon.com/dp/B0DSJQYWLG) | Realm Guard | Art + Window + Dice | $35.99 | — | ⚠️ RG #2 — same brand+type as #2 |
| 4 | [B0D264D63X](https://amazon.com/dp/B0D264D63X) | UAONO | Basic Art | $12.99 | 100 | ⚠️ Same brand+type as #8 |
| 5 | [B0FW9LFYM4](https://amazon.com/dp/B0FW9LFYM4) | Realm Guard | Art + Window (Vault, no dice) | $19.99 | 100 | ⚠️ RG #3 — diff product (no dice) |
| 6 | [B0DSLJWFFS](https://amazon.com/dp/B0DSLJWFFS) | SleeveChief | Basic Art (holo) | $19.90 | 800 | ✅ |
| 7 | [B0CN4R9ZWG](https://amazon.com/dp/B0CN4R9ZWG) | sabermaster | Basic Art (anime) | $9.99 | 50 | ⚠️ Same brand as #18 & #19 |
| 8 | [B0FM27YDKR](https://amazon.com/dp/B0FM27YDKR) | UAONO | Basic Art (lotus) | $13.99 | 200 | ⚠️ Same brand+type as #4 |
| 9 | [B0G7YDYJK8](https://amazon.com/dp/B0G7YDYJK8) | Venssu | Art + Window + Dice | $25.99 | — | ⚠️ Same brand as #1, diff product (dice tray upgrade) |
| 10 | [B0D1K5NWTX](https://amazon.com/dp/B0D1K5NWTX) | DEGDFSGR | Basic Art (Frog w/ Guitar) | $20.99 | — | ✅ 35 art variations |
| 11 | [B0D44W4L3N](https://amazon.com/dp/B0D44W4L3N) | RMJKXQZG | Basic Art (Octopus) | $12.99 | — | ✅ 29 art variations |
| 12 | [B0CQ4V7NB2](https://amazon.com/dp/B0CQ4V7NB2) | CAPAUNVDA | Basic Art (Pirate Ship) | $18.99 | — | ✅ |
| 13 | [B0D454KQWT](https://amazon.com/dp/B0D454KQWT) | KakapopoTCG | Basic Art (Kimono/Shogun) | $29.99 | — | ✅ Premium Japanese art |
| 14 | [B0DJXSD1TD](https://amazon.com/dp/B0DJXSD1TD) | MTGPRO | Basic Art | $12.99 | 50 | ✅ 13 art variations |
| 15 | [B0DT42ML35](https://amazon.com/dp/B0DT42ML35) | TCGUARD | Basic Art (patterned) | $15.99 | — | ✅ 12 variations |
| 16 | [B0DTJSCH59](https://amazon.com/dp/B0DTJSCH59) | sabermaster | Basic Art (White Dragon) | — | 100 | ⚠️ Same brand as #7 & #19, diff product (newer w/ holder) |
| 17 | [B0DTJRMDHP](https://amazon.com/dp/B0DTJRMDHP) | sabermaster | Art + Window (Sky Dragon) | — | — | ⚠️ Same brand as #7 & #16, diff product (has window) |
| 18 | [B0G41JDRM7](https://amazon.com/dp/B0G41JDRM7) | Venssu | Art + Window (Wanted Poster) | $19.99 | 100 | ⚠️ Same brand as #1 & #9, diff product |

**Duplicate summary:**
- **Realm Guard** × 3 (#2, #3, #5) — #2 & #3 are same type (window+dice), pick one. #5 is different (no dice)
- **UAONO** × 2 (#4, #8) — same product, different art. Pick one (suggest #8, stronger sales)
- **Venssu** × 3 (#1, #9, #18) — all different products. #1 is the clear strongest
- **sabermaster** × 3 (#7, #16, #17) — all different products. #17 has window (unique)

---

**[11:58 UTC] DragonBot:**

| # | ASIN | Brand | Type | Price | Sales/mo |
|---|------|-------|------|-------|----------|
| 1 | [B0FN47FNRM](https://amazon.com/dp/B0FN47FNRM) | Venssu | Art + Window | $19.99 | 700 |
| 2 | [B0G7YDYJK8](https://amazon.com/dp/B0G7YDYJK8) | Venssu | Art + Window + Dice | $25.99 | — |
| 3 | [B0FWBM3FL3](https://amazon.com/dp/B0FWBM3FL3) | Realm Guard | Art + Window + Dice (Vault) | $19.99 | 50 |
| 4 | [B0FW9LFYM4](https://amazon.com/dp/B0FW9LFYM4) | Realm Guard | Art + Window (Vault, no dice) | $19.99 | 100 |
| 5 | [B0FM27YDKR](https://amazon.com/dp/B0FM27YDKR) | UAONO | Basic Art | $13.99 | 200 |
| 6 | [B0DSLJWFFS](https://amazon.com/dp/B0DSLJWFFS) | SleeveChief | Basic Art | $19.90 | 800 |
| 7 | [B0DTJSCH59](https://amazon.com/dp/B0DTJSCH59) | sabermaster | Basic Art | — | 100 |
| 8 | [B0DTJRMDHP](https://amazon.com/dp/B0DTJRMDHP) | sabermaster | Art + Window | — | — |
| 9 | [B0D1K5NWTX](https://amazon.com/dp/B0D1K5NWTX) | DEGDFSGR | Basic Art | $20.99 | — |
| 10 | [B0D44W4L3N](https://amazon.com/dp/B0D44W4L3N) | RMJKXQZG | Basic Art | $12.99 | — |
| 11 | [B0CQ4V7NB2](https://amazon.com/dp/B0CQ4V7NB2) | CAPAUNVDA | Basic Art | $18.99 | — |
| 12 | [B0D454KQWT](https://amazon.com/dp/B0D454KQWT) | KakapopoTCG | Basic Art | $29.99 | — |
| 13 | [B0DJXSD1TD](https://amazon.com/dp/B0DJXSD1TD) | MTGPRO | Basic Art | $12.99 | 50 |
| 14 | [B0DT42ML35](https://amazon.com/dp/B0DT42ML35) | TCGUARD | Basic Art | $15.99 | — |

14 unique brand+type combos across 10 brands. Pick your 10 from these.

---

**[12:00 UTC] Gershon:**

ok, for each brand/product-type combo - make sure you get the one with the best sales (i.e. the best asin from that brand that has the same features (deck box with/without window, with/without dice tray)). show me which asins you're gonna replace with which ones.

---

**[12:00 UTC] DragonBot:**

Good, B0FN47FNRM is already the strongest Venssu window. Now checking the others:

---

**[12:01 UTC] DragonBot:**

All Venssu dice tray variants have no sales data — too new. Now Realm Guard Vault and the others:

---

**[12:03 UTC] DragonBot:**

Got all the data. Here are the swaps:

**Replacements:**

| Current | → Replace with | Reason |
|---------|---------------|--------|
| B0FWBM3FL3 (RG Vault, 50/mo) | ✅ Already best — but same type as B0DSJQYWLG | Keep as-is, it's a different line ($19.99 Vault vs $35.99 Standard) |
| B0DSJQYWLG (RG Standard, no sales) | → **B0FF33B36K** (RG Standard "The Ring", 50/mo) | Strongest RG Standard with sales data |
| B0D264D63X (UAONO, 100/mo) | → **B0FM27YDKR** (UAONO Lotus, 200/mo) | Stronger ASIN, same brand+type |
| B0CN4R9ZWG (sabermaster basic, 50/mo) | → **B0DTJSCH59** (sabermaster White Dragon, 100/mo) | Stronger ASIN, same brand+type |
| B0DJXSD1TD (MTGPRO, 50/mo) | → **B0DJXT2W1M** (MTGPRO Orange, 100/mo) | Strongest MTGPRO variation |
| B0DT42ML35 (TCGUARD, no sales) | → **B0BYHGD18C** (TCGUARD Black, 100/mo) | Strongest TCGUARD variation |

**Updated clean list (14 unique brand+type combos, strongest ASINs):**

| # | ASIN | Brand | Type | Price | Sales/mo |
|---|------|-------|------|-------|----------|
| 1 | [B0FN47FNRM](https://amazon.com/dp/B0FN47FNRM) | Venssu | Art + Window | $19.99 | 700 |
| 2 | [B0G7YDYJK8](https://amazon.com/dp/B0G7YDYJK8) | Venssu | Art + Window + Dice | $25.99 | — |
| 3 | [B0FW9LFYM4](https://amazon.com/dp/B0FW9LFYM4) | Realm Guard | Art + Window (Vault) | $19.99 | 100 |
| 4 | [B0FF33B36K](https://amazon.com/dp/B0FF33B36K) | Realm Guard | Art + Window + Dice (Standard) | $35.99 | 50 |
| 5 | [B0FM27YDKR](https://amazon.com/dp/B0FM27YDKR) | UAONO | Basic Art | $13.99 | 200 |
| 6 | [B0DSLJWFFS](https://amazon.com/dp/B0DSLJWFFS) | SleeveChief | Basic Art | $19.90 | 800 |
| 7 | [B0DTJSCH59](https://amazon.com/dp/B0DTJSCH59) | sabermaster | Basic Art | — | 100 |
| 8 | [B0DTJRMDHP](https://amazon.com/dp/B0DTJRMDHP) | sabermaster | Art + Window | — | — |
| 9 | [B0D1K5NWTX](https://amazon.com/dp/B0D1K5NWTX) | DEGDFSGR | Basic Art | $20.99 | — |
| 10 | [B0D44W4L3N](https://amazon.com/dp/B0D44W4L3N) | RMJKXQZG | Basic Art | $12.99 | — |
| 11 | [B0CQ4V7NB2](https://amazon.com/dp/B0CQ4V7NB2) | CAPAUNVDA | Basic Art | $18.99 | — |
| 12 | [B0D454KQWT](https://amazon.com/dp/B0D454KQWT) | KakapopoTCG | Basic Art | $29.99 | — |
| 13 | [B0DJXT2W1M](https://amazon.com/dp/B0DJXT2W1M) | MTGPRO | Basic Art | $12.99 | 100 |
| 14 | [B0BYHGD18C](https://amazon.com/dp/B0BYHGD18C) | TCGUARD | Basic Art | $15.99 | 100 |

---


## 2026-02-17

**[11:17 UTC] DragonBot:**

Now let me build the full Python script:

---

**[11:18 UTC] DragonBot:**

The workbook is built. I notice some irrelevant keywords slipped through the filter (like "retro gaming console", "ring box", "gift card box", "home storage", "display case" without card context). Let me tighten the filter.

---

**[11:18 UTC] DragonBot:**

Good, cleaner now. Let me send the summary to Slack.

---

**[11:18 UTC] DragonBot:**

📊 **MagVault Keyword Research Workbook Complete**

Created `magvault-kw-research.xlsx` with 6 tabs from 4,658 Cerebro keywords:

**Tab 1: Raw Data** — All 4,658 keywords with full Cerebro columns

**Tab 2: Filtered Keywords** — 1,776 keywords (SV ≥ 100, irrelevant removed)
Top keywords: "magic the gathering" (171K SV), "mtg" (75K), "display case" (64K), "mtg commander deck" (38K), "mtg deck box" (25K), "deck box" (25K)

**Tab 3: Root Keywords** — 21 clusters. Top clusters by total SV:
• `deck box` — 103K SV, 151 variants, avg bid $0.72
• `card storage box` — 68K SV, 44 variants, avg bid $0.73
• `mtg deck box` — 34K SV, 12 variants, avg bid $0.73
• `card case` — 28K SV, 19 variants, avg bid $0.69
• `trading card box` — 28K SV, 9 variants, avg bid $0.83
• `commander deck box` — 14K SV, 7 variants, avg bid $0.62

**Tab 4: Never Keywords** — 1,392 negative keywords with reasons (games, brands, product types, features)

**Tab 5: Single Words** — 728 words classified as RELEVANT/NEVER/NEUTRAL with frequency & SV

**Tab 6: PPC Keywords** — 245 exact match + 806 broad match candidates with bid data

**Key Insights:**
• "deck box" cluster is the core battleground (~103K combined SV)
• MTG/Commander keywords dominate — this is our primary audience
• Average PPC bids are modest ($0.44-$0.83 range)
• Strong long-tail opportunity in "card storage box" and "trading card box" clusters
• Large "other" bucket (674 keywords) = broad MTG/gaming terms worth mining for broad campaigns

---

**[11:18 UTC] DragonBot:**

Done. Here's what was accomplished:

**Created `/home/node/.openclaw/workspace/magvault-kw-research.xlsx`** with 6 tabs:

1. **Raw Data** — 4,658 keywords, all Cerebro columns
2. **Filtered Keywords** — 1,776 keywords (SV ≥ 100, irrelevant removed, sorted by SV)
3. **Root Keywords** — 21 clusters; "deck box" dominates at 103K combined SV
4. **Never Keywords** — 1,392 negatives with reasons (games, brands, product types, features)
5. **Single Words** — 728 words with frequency, SV, and RELEVANT/NEVER/NEUTRAL classification
6. **PPC Keywords** — 245 exact match + 806 broad match candidates with bid data

Key finding: MTG/Commander deck box keywords are the primary opportunity, with modest PPC bids ($0.44-$0.83). Slack message sent with full summary.

---

**[11:18 UTC] DragonBot:**

MagVault keyword research is ready — **4,658 keywords** processed down to **1,776 filtered**, **245 exact match PPC candidates**, and **1,392 negatives**. File's at `magvault-kw-research.xlsx` with 6 tabs. "Deck box" cluster dominates at 103K combined search volume. 🐉

---

**[11:20 UTC] DragonBot:**

Here's the MagVault keyword research workbook 🐉

---

**[11:26 UTC] DragonBot:**

Found it — there's a **"Listing keyword research - Titan<>Helium10"** page (`350945b0`). Let me read it to understand the current KW research setup.

---

**[11:32 UTC] Gershon:**

exactly. plz find the paramint brand folder and where specifically we should put this kw research file. also update your memory with our g drive structure.

---

**[12:35 UTC] Gershon:**

we're not that exact - you might as well saved it to the "Product line - MagVault" folder. in face I'd prefer it there for this one. plz update your memory about our g drive structure and note that we're not always that exact. then, actually upload your magvault kw research sheet to the "Product line - MagVault" folder.

---

**[12:35 UTC] DragonBot:**

Now let me find the MagVault keyword data I generated earlier and upload it as a Google Sheet.

---

**[12:56 UTC] DragonBot:**

Done! ✅

**Keyword research - MagVault deck boxes** is now in `Product line - MagVault/` and shared with you:

📎 https://docs.google.com/spreadsheets/d/11kv3iHqi-KdHpDQrhtFcPxDW78BRzZhVeE5crLSuwGA

6 tabs: Raw Data (4,659 rows), Filtered Keywords (1,777), Root Keywords, Never Keywords, Single Words, and PPC Keywords.

I also grabbed the folder's permission list — going forward I'll match permissions on any files I create to the parent folder. Noted that the team includes workspace users (gershon@, elhanan@, ronna@, lana@, dragonbot@) plus several gmail accounts.

---

**[13:10 UTC] Gershon:**

ok I'm gonna give you some comments on your research. plz update your amazon kw research skill as well so you'd know to do better in the future (for completely different products for completely different companies). • for some reason you put "other" as a root keyword - what is that ? • "mtg accessories" as a RKW (root keyword) is too generic (same for some of the other RKW's) ◦ don't delete them yet but just an internal note for now • "card protector" I don't really captures it - plus if you look at the "top 5 variants" column - there's one for mahjong there - ours is not for mahjong cards • why are some of the KW's from "raw data" missing in "filtered keywords" ? I see for example that "goblin deck box mtg" disappeared - it has 0 SV but we might still want it (might be a valuable long-tail KW) • if you can put each of the RKW's in a different color and then, in the "filtered keywords" - mark the KW's derived from these RKW's in the same color (if a KW belongs to two or more RKW's - just choose one)

---

**[13:11 UTC] DragonBot:**

OK, I see the problem — I was filtering out too many keywords. ~2,900 dropped, including relevant ones like "heavy duty deck box", "mtg deck box final fantasy", etc. Let me now fix all the issues and update the sheet:

---

**[13:12 UTC] DragonBot:**

Sheet is updated. Now let me update the KW research skill:

---

**[13:13 UTC] DragonBot:**

No dedicated KW research skill yet. Let me create one based on what I've learned:

---

**[13:13 UTC] DragonBot:**

All done. Here's what I fixed in the sheet:

**Changes made:**
1. **"other" root keyword** — added a note flagging it as a catch-all bucket that needs reclassification
2. **Generic RKWs** (mtg accessories, magic the gathering accessories, card protector) — added ⚠️ notes flagging them as too generic
3. **Missing keywords** — rebuilt Filtered Keywords to include **all 4,658 keywords** from Raw Data (was 1,776 — I was dropping ~2,900 keywords including valuable long-tail ones like "goblin deck box mtg")
4. **Root Keyword column** — added a "Root Keyword" column to Filtered Keywords classifying each keyword
5. **Color coding** — each root keyword has a distinct pastel color, applied to both the Root Keywords tab and all matching rows in Filtered Keywords

**Created new skill:** `amazon-kw-research` with lessons learned:
- Never filter out zero-SV keywords
- Root keywords must be product-specific, not generic
- No "other" catch-all buckets
- Always verify Top 5 Variants are relevant
- Quality checklist included

---

**[13:15 UTC] Gershon:**

fucking amazing. now tell me what is the difference here between "raw data" and "filtered keywords" ?

---

**[13:15 UTC] DragonBot:**

Honestly? Right now — not much. After I rebuilt it to include all keywords, Filtered Keywords has the same 4,658 rows as Raw Data. The only differences are:

1. **Fewer columns** — Raw Data has 33 columns (all the Cerebro export fields like individual ASIN rankings, ABA click share, etc.). Filtered Keywords has 13 key columns (the ones you actually care about for decision-making).
2. **Root Keyword column** — Filtered Keywords has the classification + color coding.

That's it. They're essentially the same dataset in two views: raw dump vs. working view.

**Options going forward:**
- **Merge them** — ditch "Filtered Keywords" and just add the Root Keyword column + colors directly to Raw Data. One source of truth.
- **Make Filtered Keywords actually filtered** — use it as a curated shortlist (e.g., only keywords you've reviewed and approved), while Raw Data stays as the full Cerebro dump. But then we'd need clear criteria for what "filtered" means.

What makes more sense to you? I'll update the skill accordingly.

---

**[13:16 UTC] Gershon:**

nah let's just rename "filtered keywords" to something else - suggestions ?

---

**[13:16 UTC] DragonBot:**

How about:
1. **Keyword Analysis** — it's the working sheet where you actually analyze
2. **Classified Keywords** — emphasizes the root keyword grouping
3. **Keyword Map** — short, implies structure/organization

I'd go with **Keyword Analysis**. Clean and describes what it is — the simplified, classified view of the data.

---

**[13:17 UTC] Gershon:**

let's call it "raw keywords" - this way we know it's raw. it's not "raw data" either tho - it had some processing. add that to your skill too.

---

**[13:17 UTC] DragonBot:**

Done ✅ — renamed to "Raw Keywords" and updated the skill to clarify the distinction:
- **Raw Data** = full Cerebro dump, all 33 columns, untouched
- **Raw Keywords** = processed view with key columns + root keyword classification + colors

---

**[13:20 UTC] Gershon:**

I see "avatar mtg box" is under the "other" RKW. it should definitely be under a more suitable RKW rather than the catchall. why isn't there a "mtg box" RWK ?

---

**[13:20 UTC] DragonBot:**

You're right — "mtg box" is an obvious root keyword I missed. A lot of keywords like "avatar mtg box", "final fantasy mtg box", "mtg box set" etc. would fall under it instead of "other".

This goes back to the broader issue: the "other" bucket is too big and needs to be broken down into proper root keywords. Let me check how many "other" keywords there are and what root keywords are missing:

---

**[13:24 UTC] Gershon:**

let's make it so that there's no "other" catchall RKW - if a lot of keywords are not caught by our RWK's - then we know we got a problem. we'll see that a lot of the RWK's in the "raw keywords" sheet are not highlighted. plz add that to your skill notes as well. agreed with #1. about #2 - some of these keywords are relevant. let's just go with what I said above for now - remove the catchall and we'll see what we're missing. makes sense ?

---

**[13:26 UTC] DragonBot:**

Updated. Here's where we stand:

- **21 root keywords** (no catchall)
- **2,357 classified** (colored) — ~51%
- **2,301 unclassified** (white/uncolored) — ~49%

The uncolored rows tell us we still have coverage gaps. Many of those are genuinely off-topic (pokemon, retro gaming, etc.) but some will reveal missing RKWs worth adding. You can scan the white rows and we can add more RKWs as needed.

---

**[13:29 UTC] Gershon:**

also - plz make it so that numbers are numbers (without the leading `) this way I can filter/sort by number rather than by text. fix first for the "raw keywords" sheet. add to your notes as well.

---

**[13:30 UTC] DragonBot:**

Skill updated. Numbers sort as numbers now — try filtering by Search Volume, should work properly.

---

**[13:35 UTC] Gershon:**

that's not enough - you know what - let's rename "Raw keywords" back to "Filtered keywords" and only put the relevant keywords in there. relevancy test - if 3/10 competitors at least are ranking for it. since we only have 8 (or 7) - make it 2. update your notes.

---

**[13:36 UTC] DragonBot:**

Also adding the RKW relevance rule:

---

**[13:40 UTC] Gershon:**

the KW's of "magnetic box" are all captured by other RKW's or are irrelevant ("red magnetic gift box") - plz remove that RKW

---

**[13:41 UTC] DragonBot:**

Done ✅ — "magnetic box" removed. 16 RKWs now, keywords that were under it either got picked up by "magnetic accessories" or went unclassified.

---


## 2026-02-18

**[11:01 UTC] DragonBot:**

This is super clear. Let me update everything and redo the Never Keywords properly.

---

**[11:01 UTC] DragonBot:**

Notion page is private, can't fetch directly. No worries — your explanation is thorough enough. Let me update memory, skill, and rebuild the Never Keywords sheet.

---

**[11:01 UTC] DragonBot:**

Now let me update the skill and rebuild the Never Keywords sheet:

---

**[11:02 UTC] DragonBot:**

Now let me rebuild the Never Keywords sheet properly for MagVault:

---

**[11:03 UTC] DragonBot:**

Now let me rebuild the Never Keywords:

---

**[11:06 UTC] DragonBot:**

Interesting — the TitanWay template has different sheet names. I can see the Notion page and the example sheet. ✅

The page confirms exactly what you said about the PPC structure. I also notice the Notion SOP mentions some steps I should incorporate — like the Cerebro "Exclude variations" option and using Frankenstein for single words.

Memory and skill are already updated with the NKW logic and PPC structure. Want me to do anything else with this Notion page, or should we keep refining the MagVault sheet?

---

**[11:09 UTC] Gershon:**

amazing job. let's not put "sleeve" in the nkw's tho - someone might look for "double sleeve deck box" - meaning a deck box that can hold cards that are double-sleeved ....

---

**[11:09 UTC] DragonBot:**

Good catch — "sleeve"/"sleeves" should NOT be NKWs. A "double sleeved deck box" or "100 sleeved cards deck box" is exactly our product. Removing them now.

---

**[11:10 UTC] DragonBot:**

Done — 87 NKWs now. Good lesson for the skill too: words that describe how a product is *used with* our product aren't NKWs, even if they're also a separate product category.

---

**[11:20 UTC] Gershon:**

amazing job. now let's create the "master list" (should've been created when we first created the sheet, it's a part of the kw research - add to your notes). the master list should just contain all of the kw's that are highlighted (i.e. they are captured by our rkw's), minus any keywords that contain words from the nkw's. so: master_list = filtered_keywords*root_keywords/never_keywords (multiplication means the overlap of two lists - e.g. filtered keywords that are captured by the root keywords) (division means remove from the numerator and items that are captured by the denominator - e.g. filtered keywords that are captured by the never keywords should be removed). add that to your notes. after we have the "master list" sheet, to its right, we should create a "single words" sheet - which would contain single words taken from the "master list", along with how many times they appear *in the master list.* *add that to your notes.*

---

**[11:21 UTC] DragonBot:**

Done ✅

- **Master List**: 464 keywords (508 classified minus 44 that contained NKWs)
- **Single Words**: 224 unique words from the Master List, sorted by frequency

Sheet tab order: Raw Data → Filtered Keywords → Root Keywords → Never Keywords → Master List → Single Words → PPC Keywords

---

**[11:42 UTC] Gershon:**

some more words that should be added to nkw's: • gamegenic - competitor • game genic - competitor • ultimate guard - competitor • ultra pro - competitor • ultrapro - competitor • boulder - competitor • bundle - saw it in the "mtg bundle box" kw - this is something completely different and unrelated to our product - it's when somebody buys a box containing a "bundle" of products from mtg • mage tech - competitor • magetech - competitor • sidewinder - competitor • quiver - competitor • scene - refers to a "scene box" - a product sold by mtg - unrelated • beginner - refers to "beginner box" - a product sold by mtg - unrelated • vaultx - competitor • dragon shield - competitor • 60 - refers to deck boxes for 60 cards - ours is bigger • zlca - competitor • divider - not the product we're selling (refers to dividers people put inside deck boxes) • kabinka - competitor • more competitors: ◦ uaono ◦ academic ◦ heavy play ◦ heavyplay ◦ monster ◦ vault x ◦ squaroes ◦ bastion ◦ gamegenics ◦ ai armor ◦ satin ◦ mlikero • top loader / toploader - ours cannot fit a toploader • mystery - "mystery box" refers to something else • gallon - there's a COMPLETELY different product also named a "deck box" (some huge crate people put in their gardens). if somebody is searching for "gallon" they're probably searching for that product (and its volume), not for our kind of "deck box" • custom - ours is not custom • 2 - refers to a deck box holding 2 decks - ours holds 1 • acrylic - ours is not acrylic

---

**[11:43 UTC] DragonBot:**

Done ✅

- **Never Keywords:** 87 → 117 (added 30 new — competitors, product mismatches, sizes)
- **Master List:** 464 → 409 (55 keywords removed by new NKWs)
- **Single Words:** 224 → 195 (rebuilt from updated Master List)

A few notes on words I was conservative about:
- **"dragon"** — didn't add, too relevant to MTG (dragon tribal decks, etc.)
- **"monster"** — didn't add, could mean Monster brand but also MTG monsters
- **"pro"** / **"shield"** — didn't add individually, too generic on their own

Added "ultrapro", "vaultx", "magetech", "heavyplay" as single words, and "gamegenic"/"gamegenics", "ultimate" (almost always "ultimate guard" in this context), "satin" (Ultra Pro Satin Tower), "armor" (AI Armor), etc.

Also want me to add a note to the skill about competitor brand names being NKWs?

---

**[11:50 UTC] Gershon:**

amazing. now let's create another sheet named "Amazon listing" where you suggest what the title and bullet points of the product will be. things to note: • you want to include as many as possible (if not all) of the words from the "single words" tab • the more important a word is (the higher its count is) the more you'd want it to appear first • the title is much more important keyword-wise than the bullet points. the title should definitely contain all of the important words from "single words" • most importantly however - you want the title and bullet points to make sense and to be readable overall. and of course - also relevant to the product and its features. • follow the amazon guidelines for title length also - have counters in this sheet showing: • which words from the "single words" list were used (along with their count) • the character length of the title • anything else you think would be useful

---

**[11:50 UTC] DragonBot:**

Now let me understand the MagVault product better:

---

**[11:51 UTC] DragonBot:**

Good — now I have a clear picture of MagVault. Let me create the listing sheet:

---

**[11:52 UTC] DragonBot:**

Some of these I can naturally work in. "yugioh" is there but I used "Yu-Gi-Oh" — the hyphenation means the single words don't match. "lorcana" IS in the bullets. Let me check what's actually matching vs not:

The coverage is reasonable for a real listing — 27% of single words is actually decent since many are franchise names (Avatar, Lorwyn, Spiderman, etc.) that would be absurd to put in the listing text. The important functional words (deck, box, card, mtg, case, storage, magic, commander, tcg, etc.) are all covered.

Here's what's in the sheet now:

**Title (193 chars):**
> Paramint MagVault Magnetic Deck Box for MTG Commander – Holds 100+ Sleeved Cards – Premium TCG Card Case & Storage Organizer for Magic The Gathering, Pokemon, Yu-Gi-Oh, Lorcana Trading Card Games

**5 Bullet Points** covering:
1. Product specs (magnetic, 100+ cards, game compatibility)
2. Storage & protection
3. Art designs
4. Portability
5. Gift angle

**Counters included:**
- Title character count (193/200)
- Title word count
- Each bullet's character count
- Total bullet characters
- Keyword coverage breakdown (in title / in bullets / unused)
- Top 30 unused words for quick review
- Full word-by-word detail table

Take a look — the unused words section makes it easy to spot if anything important is missing. Most of the unused are franchise names and competitor terms that naturally don't belong in the listing.

---

**[11:53 UTC] Gershon:**

amazing. now plz format that sheet and color code it so it's easier to read.

---

**[11:54 UTC] DragonBot:**

Done ✅ — the Amazon Listing sheet is now color-coded:

- 🔵 **Dark blue** — section headers (TITLE, BULLET POINTS, KEYWORD COVERAGE, etc.)
- 💙 **Light blue** — title text
- 💚 **Light green** — bullet points (alternating shades)
- 💛 **Light yellow** — coverage stats
- 🟠 **Orange** — top unused words (quick review)
- 🟢 **Green rows** — words used in title
- 🟡 **Yellow rows** — words used in bullets only
- 🔴 **Red rows** — unused words
- **Dark red separator** — "UNUSED WORDS" divider

Text wraps on the bullet column so you can read them fully. Take a look!

---

**[11:54 UTC] Gershon:**

amazing. make sure the YES/NO of "in title"/"in bullets" is also color coded (green/red)

---

**[11:57 UTC] DragonBot:**

Done ✅ — every unused word now has a note in column E explaining why it's unused:

- **"Variant X already in listing"** — e.g. "boxes" → "box" is there, "sleeves" → "sleeved" is there
- **"Franchise/set name"** — lorwyn, avatar, spiderman, etc.
- **"Competitor brand"** — ultra, pro, mage, tech, etc.
- **"Color"** — white, black, blue, etc. (listing covers multiple variants)
- **"Material not applicable"** — leather, plastic, waterproof
- **Feature-specific notes** — dice, tray, window (flagged to check if MagVault has these features)
- **"Already in listing"** — lorcana, 100, dragon, carrying, etc.

---

**[11:59 UTC] Gershon:**

amazing. add all of this info on how to create the "Amazon Listing" sheet to your notes for kw research.

---

**[11:59 UTC] DragonBot:**

Done ✅ — skill updated with the full Amazon Listing sheet spec including layout, counters, color coding, and notes logic.

---

**[12:02 UTC] Gershon:**

absolutely amazing. now add/modify the bullet points to also include info about the optional MagDiceTray magnetically attached dice tray that we sell separately. this will cover any other words like "dice" and "tray".

---

**[12:04 UTC] DragonBot:**

Done ✅ — Bullet 3 is now about the MagDiceTray:

> **ADD A MAGNETIC DICE TRAY** – Pair your MagVault with our MagDiceTray, a magnetically attached dice tray sold separately. It snaps right onto the side of your deck box for a complete setup — cards and dice in one portable, organized package. Perfect for commander players who roll dice at the table.

Coverage went from 27% → 28%, picking up "dice" and "tray" plus reinforcing "magnetic". All formatting and color coding reapplied cleanly.

---

**[12:07 UTC] Gershon:**

okay. now completely unrelated note (unrelated to kw research specifically). I want absolutely EVERYTHING that you do - that you verify beforehand that it is amazon TOS-compliant. if I ask you to do something that is not amazon TOS-compliant - then you have to inform me. for example - I'm not sure it's allowed to advertise about another product from within the bullet points of my product. if I ask you to do that (e.g. advertise the magdicetray on the bullet points of the magvault product) - you have to check if it's amazon TOS-compliant and inform me if it isn't. this is applicable to ANYTHING that you as a bot do. plz make sure to update that in your memory in a place that is very much core to what it is that you do (i.e. not in the "kw research" skill - but something that you'd remember that you have to do always).

---

**[12:07 UTC] DragonBot:**

You're absolutely right — I should have flagged that before writing it. Let me check the MagDiceTray cross-promotion specifically, and update my core memory.

---

**[12:08 UTC] DragonBot:**

Seller Central is blocking the content. Let me update core memory first, then address the MagDiceTray question:

---

**[12:08 UTC] DragonBot:**

Now about the MagDiceTray bullet — here's my assessment:

**⚠️ TOS Flag: Cross-promoting another product in bullet points**

Amazon's product detail page policies state that bullet points should describe the **listed product's features and benefits**. Mentioning a separately sold product (MagDiceTray) is a gray area:

- **Allowed:** Mentioning compatibility — e.g., "Compatible with our MagDiceTray magnetic dice tray (sold separately)"
- **Risky:** Actively advertising/promoting another product — e.g., "Pair your MagVault with our MagDiceTray!"
- **Not allowed:** Including links, ASINs, or directing customers to other listings

The way I wrote it ("Pair your MagVault with our MagDiceTray, a magnetically attached dice tray sold separately") leans promotional. Many sellers do this, but it could technically trigger a listing review.

**Safer alternatives:**
1. Mention it as a compatibility note: "Compatible with magnetically attached dice trays (sold separately)"
2. Put the cross-sell in A+ Content / Brand Story instead (that's explicitly designed for it)
3. Create a virtual bundle listing

Want me to tone down that bullet to be safer, or are you comfortable with the current wording given it's common practice?

---

**[12:20 UTC] Gershon:**

great. now let's continue working on the kw research skill. now we need to add another sheet named "PPC setup" in it: • organize how we're gonna set up our PPC based on the kw research we've done (you already know how it should be set up) • format it nicely

---

**[12:21 UTC] DragonBot:**

Done ✅ — **PPC Setup** sheet created with:

| Section | Count | Color |
|---------|-------|-------|
| Campaign Structure | 2 campaigns | Green (EXACT) / Purple (BROAD) |
| EXACT Keywords | 409 keywords | Green alternating |
| BROAD Exact Negatives | 409 keywords | Orange alternating |
| BROAD Phrase Negatives | 117 never keywords | Red alternating |
| Summary | Bid avg: $0.72 | Yellow |

Everything's organized so someone could take this sheet and set up the campaigns directly in Amazon Ads.

---

**[12:31 UTC] Gershon:**

amazing. save that to your kw research skill memory as well.

---

**[12:31 UTC] DragonBot:**

All there ✅ — the full skill covers every sheet we built:

1. Raw Data
2. Filtered Keywords
3. Root Keywords
4. Never Keywords
5. Master List
6. Single Words
7. Amazon Listing
8. PPC Setup

Plus formatting rules, quality checks, and all the lessons learned.

---
