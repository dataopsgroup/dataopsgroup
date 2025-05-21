
# HTML Attribute Naming Conventions in React

This guide outlines our conventions for HTML attribute naming in React components and DOM API interactions.

## Core Principles

1. **In JSX/React components:**
   - Always use camelCase for attributes (React's convention)
   - Example: `<img fetchPriority="high" crossOrigin="anonymous" />`

2. **In DOM API direct property access:**
   - Use camelCase for property names
   - Example: `element.className = 'my-class'`

3. **In DOM API setAttribute calls:**
   - Use lowercase attribute names (standard HTML convention)
   - Example: `element.setAttribute('fetchpriority', 'high')`

## Common Attributes Reference

| HTML Attribute    | JSX/React (camelCase)  | DOM setAttribute (lowercase) |
|-------------------|------------------------|----------------------------|
| fetchpriority     | fetchPriority          | fetchpriority              |
| crossorigin       | crossOrigin            | crossorigin                |
| referrerpolicy    | referrerPolicy         | referrerpolicy             |
| aria-label        | aria-label             | aria-label                 |
| maxlength         | maxLength              | maxlength                  |
| tabindex          | tabIndex               | tabindex                   |
| autocomplete      | autoComplete           | autocomplete               |

## Best Practices

1. **Use our utility functions:**
   ```typescript
   import { setDOMAttribute, addPreloadLink } from '@/utils/dom-attributes';
   
   // When manipulating DOM directly
   setDOMAttribute(element, 'fetchPriority', 'high');
   
   // For common patterns
   addPreloadLink('/image.jpg', 'image', { fetchPriority: 'high' });
   ```

2. **For direct DOM API calls, prefer setAttribute:**
   ```typescript
   // Correct
   element.setAttribute('fetchpriority', 'high');
   
   // Avoid direct property assignment for non-standard properties
   // element.fetchpriority = 'high'; // Might not work as expected
   ```

3. **JSX attributes should always use React's camelCase convention:**
   ```typescript
   // Correct
   <img 
     src="/image.jpg" 
     fetchPriority="high"
     crossOrigin="anonymous"
   />
   
   // Incorrect
   <img 
     src="/image.jpg" 
     fetchpriority="high"
     crossorigin="anonymous"
   />
   ```

## Common Issues and Fixes

1. **TypeScript errors with JSX attributes:**
   - If you see `Property 'fetchpriority' does not exist on type...`, use the camelCase version `fetchPriority`

2. **Resource hints not working:**
   - When using `document.createElement('link')`, remember to use lowercase attributes with `setAttribute`

3. **Image loading optimization failures:**
   - Check for proper attribute naming: `fetchPriority` in JSX, but `fetchpriority` in `setAttribute`

## Testing Attribute Naming

To verify attribute naming is working correctly:

1. Check the rendered DOM elements in browser dev tools
2. Ensure Core Web Vitals metrics are being reported correctly
3. Test resource prioritization using Chrome DevTools Network panel

## References

- [React DOM Elements Documentation](https://reactjs.org/docs/dom-elements.html)
- [HTML Spec: fetchpriority](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority)
- [MDN: HTML Attributes Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
