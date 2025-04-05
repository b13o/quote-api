🍢 [日本語の README](README.ja.md)

# Tech Quotes API

![Image](https://github.com/user-attachments/assets/533c569c-7fc3-492b-8813-28e3494225b6)

> A simple, static API that returns inspiring quotes from tech leaders and entrepreneurs.

## Overview

This project provides a collection of 100 quotes from famous tech industry figures including Elon Musk, Steve Jobs, Mark Zuckerberg, Reid Hoffman, and many more. The API is designed to be completely static and can be hosted on GitHub Pages or any static hosting service.

## API Usage

### Endpoints

- `GET /api/quotes/{id}` - Returns a specific quote by ID (1-100)

  Example: `/api/quotes/42` returns quote #42

### Response Format

```json
{
  "id": 3,
  "author": "Linus Torvalds",
  "quote": "Talk is cheap. Show me the code."
}
```

## Features

- ✅ 100% static - no server-side processing required
- ✅ CORS enabled - can be used from any website
- ✅ Simple JSON responses
- ✅ Curated collection of authentic quotes from tech leaders
- ✅ Free to use under MIT license

## Local Development

1. Clone the repository

   ```
   git clone https://github.com/yourusername/tech-quotes-api.git
   cd tech-quotes-api
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. Build for production

   ```
   npm run build
   ```

5. Deploy to GitHub Pages
   ```
   npm run deploy
   ```

## Contributing

Contributions are welcome! If you'd like to add more quotes or improve the API, please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-quote`)
3. Commit your changes (`git commit -m 'Add some amazing quotes'`)
4. Push to the branch (`git push origin feature/amazing-quote`)
5. Open a Pull Request

## Future Improvements

- Add category filtering
- Add author filtering
- Implement pagination for bulk retrieval
- Add more quotes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all the tech visionaries whose quotes inspire us daily
- Built with Next.js and TypeScript
