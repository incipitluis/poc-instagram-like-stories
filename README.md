# Instagram-like Stories POC

This proof-of-concept (POC) demonstrates an implementation of Instagram-like stories in a Next.js 14 application using React, TypeScript, and TailwindCSS. Users can click on a story to view a fullscreen video, which automatically plays and has smooth transitions for opening and closing. The video also pauses when the screen is pressed and resumes when released. Additionally, once a story is viewed, the story button reduces its opacity to indicate it has been watched.

## Built With

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn Buttons](https://ui.shadcn.dev/)
- [tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide)
- [tailwind-scroll-behavior](https://www.npmjs.com/package/tailwind-scroll-behavior)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repo

   git clone https://github.com/your-username/instagram-like-stories-poc.git

2. Navigate to the project directory

cd instagram-like-stories-poc
Install NPM packages


npm install
## Usage

Start the development server


npm run dev
Open your browser and navigate to http://localhost:3000 to see the app in action.

## Features

### FullScreen Video Playback

- Click on a story to open a fullscreen video.
- Video plays automatically and closes after 20 seconds or when the close button is clicked.
- Pause the video by holding down the screen and resume by releasing the hold.

### Smooth Transitions

- CSS animations for fade-in and fade-out transitions when opening and closing the video.

### Story Viewed State

- Viewed stories reduce their opacity to indicate they have been watched.

### Responsive Design

- TailwindCSS for responsive and adaptive styling.

## Dependencies

This project relies on the following NPM packages:

- `next: ^14.0.0`
- `react: ^18.0.0`
- `typescript: ^4.0.0`
- `tailwindcss: ^3.0.0`
- `shadcn/ui: ^1.0.0`
- `tailwind-scrollbar-hide: ^1.1.7`
- `tailwind-scroll-behavior: ^1.0.1`

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@your-twitter-handle](https://twitter.com/your-twitter-handle) - email@example.com

Project Link: [https://github.com/your-username/instagram-like-stories-poc](https://github.com/your-username/instagram-like-stories-poc)

## Notas adicionales

1. **Replace placeholders**: Asegúrate de reemplazar los marcadores de posición como `your-username`, `your-twitter-handle`, y `email@example.com` con la información correcta.
2. **Installation of additional dependencies**: Si estas dependencias (`shadcn/ui`, `tailwind-scrollbar-hide`, `tailwind-scroll-behavior`) no están instaladas en tu proyecto, asegúrate de ejecutarlas:

   ```sh
   npm install @shadcn/ui tailwind-scrollbar-hide tailwind-scroll-behavior
