# 🌍 World Flags Explorer
## A React + TypeScript Application

### Project Overview

**World Flags Explorer** is an interactive web application that displays information about countries from around the world. Users can explore country details including flags, population, languages, currencies, and more.


## Key Features

### 1. **Comprehensive Country Display**
- View all countries with their flags and basic information
- Clean, card-based layout for easy browsing

### 2. **Detailed Country Information**
- Click any country to see detailed information:
  - Official and common names
  - Capital city
  - Population
  - Languages spoken
  - Currencies used
  - Continental region
  - Bordering countries

### 3. **Smart Filtering**
- **Search by Name**: Real-time search for specific countries
- **Filter by Continent**: Browse countries by geographic region
  - Africa
  - Americas
  - Asia
  - Europe
  - Oceania

### 4. **Responsive Design**
- Mobile-friendly interface
- Adapts to different screen sizes
- Bootstrap integration for consistent styling

### 5. **Error Handling**
- Custom error classes for network and data issues
- Graceful error recovery
- User-friendly error messages

---

## Architecture

### Project Structure
```
src/
├── API/
│   └── apiFetch.ts          # API integration layer
├── Components/
│   ├── BackButton/          # Navigation component
│   ├── ErrorClass/          # Error handling utilities
│   ├── FlagCard/            # Individual country detail view
│   ├── FlagDisplay/         # Country cards grid
│   ├── Header/              # App header
│   ├── HomeBody/            # Main content container
│   ├── SearchBar/           # Search functionality
│   ├── SelectByContinents/  # Continent filter
│   └── Spinner/             # Loading indicator
├── Page/
│   ├── Home/                # Main landing page
│   └── NoPage/              # 404 error page
├── types/
│   └── types.ts             # TypeScript interfaces
└── utils/                   # Utility functions
```

### Component Organization
- **Modular Design**: Each component is self-contained
- **Separation of Concerns**: Logic, styles, and markup separated
- **Reusability**: Components designed for reuse
- **Type Safety**: Full TypeScript coverage

---

## User Experience

### Navigation Flow
1. **Landing Page** → Grid of all countries with flags
2. **Search/Filter** → Refined results based on user input
3. **Country Details** → Comprehensive information page
4. **Back Navigation** → Return to main view

### Loading States
- Spinner component for asynchronous operations
- Smooth transitions between states
- No jarring loading experiences

### Error States
- Network error handling
- Data validation errors
- 404 page for invalid routes

---

##  API Integration

### REST Countries API
- **Endpoint**: `https://restcountries.com/v3.1/`

### API Methods

#### 1. Fetch All Countries
```typescript
fetchALLData()
```
- Returns all countries with selected fields
- Fields: name, capital, region, languages, flags, population, currencies

#### 2. Fetch by Country Name
```typescript
fetchOne(countryName: string)
```
- Full text search for specific country
- Returns detailed country information

#### 3. Fetch by Country Code
```typescript
fetchByCode(countryCode: string)
```
- Abreviation country code
- Used for border countries navigation

### Error Handling
- Custom `NetworkError` class for connection issues
- Custom `DataError` class for invalid data
- Comprehensive try-catch blocks

---

### Pages Showcase:

1. **Home Page**
   - Grid of country flags
   - Search bar at top
   - Continent filter dropdown

2. **Country Detail Page**
   - Large flag display
   - Detailed information cards
   - Border countries (if applicable)

3. **Search Results**
   - Filtered country list
   - Real-time updates

4. **Mobile View**
   - Responsive layout

---

## Future Enhancements

### Potential Features
1. **Favorites** - Save favorite countries locally
2. **Maps Integration** - Visual country location display
3. **Historical Data** - Population trends over time
4. **Weather Integration** - Current weather in capital cities
5. **News Feed** - Latest news from each country
6. **Language Learning** - Basic phrases in native languages

### Technical Improvements
1. **Testing** - Unit tests, integration tests, E2E tests
2. **Caching** - Local storage for API responses

---

## Learning Outcomes

### Skills Demonstrated
- Modern React development with hooks
- TypeScript for type-safe code
- API integration and data fetching
- State management
- Component composition
- Routing and navigation
- Error handling patterns
- Responsive design
- CSS styling techniques

---

## Conclusion

**World Flags Explorer** demonstrates modern web development practices using React and TypeScript. The application provides an intuitive user experience for exploring world geography while showcasing clean code architecture and professional development standards.

### Contact & Links
- **GitHub Repository**: [/project-React-Dev/](https://github.com/Eduart80/project-React-Dev)
- **Live Demo**: [https://eduart80.github.io/project-React-Dev/](https://eduart80.github.io/project-React-Dev/)
- **Developer**: Eduart

---

*Thank you for your interest in World Flags Explorer!*
