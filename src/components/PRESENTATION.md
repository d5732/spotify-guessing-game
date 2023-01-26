PRESENTATION.md

Environment: 
React.js
Material UI
howler.js


Landing/Config (Home): 
- Genre selection (spec)
- By default, select 1 song and 2 artists.
- 1-3 Songs (spec)
- 2-4 Artists (spec)
- Play saves your settings and continues to guess page with your config (spec)
- Fetches artists, then songs from Spotify API, using the existing service provided (spec)


Game p1 (Guess): 
- Songs to play (# from config)
    - Play/pause, can't play more than one song at a time
    - Global volume control
- Artists to guess (# from config)
    - One guess only, takes you to result page


Game p2 (Result):
- Results show win/loss in the heading, the correct answer, and what you guessed if you guessed incorrectly, indicated by colors and emojis.
- Home button takes you back to config so you can play again.
