# mkpages.js

A library for building Misskey Pages.

**Variables is NOT implemented because Pages function will be updated.**

## Installation

```bash
npm install mkpages.js
```

## Example

```javascript
const { MkPages, MPText, MPButton, MPPost } = require('mkpages.js');

// Build the page.
const page = new MkPages()
  .setTitle('Page name')
  .addComponents(
    new MPText({ text: 'Text' }),
    new MPButton({ action: 'dialog', title: 'Button', content: 'Dialog Content' }),
    new MPPost({ text: 'Post Form' })
  );

// Page to JSON.
const json = page.toJSON();

// Build the page from JSON.
const pageFromJSON = new MkPages(json);
pageFromJSON.addComponents(new MPText({ text: 'Added Text' }));

const changedJson = pageFromJSON.toJSON();

// Post the page to Misskey.
fetch('https://misskey.io/api/pages/create', {
  method: 'post',
  body: changedJson,
  headers: { 'Content-Type': 'application/json' },
});
```

## API

### Page

#### MkPages

```typescript
new MkPages(json?: string);
get urlName(): string;
get title(): string;
get summary(): string | null;
get content(): Component[];
get variables(): any[]; // Not implemented
get script(): string;
get eyeCatchingImageId(): string | null;
get font(): Fonts;
get alignCenter(): boolean;
get hideTitleWhenPinned(): boolean;
// The methods below can be chained.
setUrlName(value: string);
setTitle(value: string);
setSummary(value: string);
setContent(value: Component[]);
setVariables(value: any[]); // Not implemented
setScript(value: string);
setEyeCatchingImageId(value: string);
setFont(value: Fonts);
setAlignCenter(value: boolean);
setHideTitleWhenPinned(value: boolean);
addComponents(...component: Component[]);
removeComponent(index: number);
```

### Components

#### MPButton

```typescript
// Dialog button
new MPButton({
  action: 'dialog',
  title: string,
  primary: boolean,
  content: string,
});
// Reset random button
new MPButton({
  action: 'resetRandom',
  title: string,
  primary: boolean,
});
// Push event button
new MPButton({
  action: 'pushEvent',
  title: string,
  primary: boolean,
  event: string,
  message: string,
  variable: string,
});
// Call AiScript button
new MPButton({
  action: 'callAiScript',
  title: string,
  primary: boolean,
  functionName: string,
});
```

#### MPCanvas

```typescript
new MPCanvas({
  canvasId: string,
  width: number,
  height: number,
});
```

#### MPCounter

```typescript
new MPCounter({
  variableName: string,
  title: string,
  increaseValue: number,
});
```

#### MPIf

```typescript
new MPIf({
  variableName: string,
  children: Component[],
});
```

#### MPImage

```typescript
new MPImage({
  fileId: string,
});
```

#### MPNumberInput

```typescript
new MPNumberInput({
  variableName: string,
  title: string,
  defaultValue: number,
});
```

#### MPPost

```typescript
// Without canvas image
new MPPost({
  text: string,
});
// With canvas image
new MPPost({
  text: string,
  canvasId: string,
});
```

#### MPRadioButton

```typescript
new MPRadioButton({
  variableName: string,
  title: string,
  values: string[],
  defaultValue: string,
});
```

#### MPSection

```typescript
new MPSection({
  title: string,
  children: Component[],
});
```

#### MPSwitch

```typescript
new MPSwitch({
  variableName: string,
  title: string,
  defaultValue: boolean,
});
```

#### MPText

```typescript
new MPText({
  text: string,
});
```

#### MPTextInput

```typescript
new MPTextInput({
  variableName: string,
  title: string,
  defaultValue: string,
});
```

#### MPTextarea

```typescript
new MPTextarea({
  text: string,
});
```

#### MPTextareaInput

```typescript
new MPTextareaInput({
  variableName: string,
  title: string,
  defaultValue: string,
});
```

### Environment Variables

```javascript
const MPEnvVars = {
  ai: 'AI',
  url: 'URL',
  version: 'VERSION',
  login: 'LOGIN',
  name: 'NAME',
  username: 'USERNAME',
  userid: 'USERID',
  notesCount: 'NOTES_COUNT',
  followersCount: 'FOLLOWERS_COUNT',
  followingCount: 'FOLLOWING_COUNT',
  isCat: 'IS_CAT',
  seed: 'SEED',
  ymd: 'YMD',
  aiScriptDisabled: 'AISCRIPT_DISABLED',
  null: 'NULL',
}
```
