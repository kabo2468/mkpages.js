# mkpages.js

A library for building Misskey Pages.

v2 for Misskey v13, v1 for Misskey v12

## Installation

```bash
npm install mkpages.js
```

## Example

<https://misskey.io/@kabo/pages/1640543620758>

```javascript
const { MkPages, MPText } = require('mkpages.js');

// Build the page.
const page = new MkPages()
  .setTitle('Page name')
  .setAlignCenter(true)
  .addComponents(
    new MPText({ text: 'Text' }),
    new MPText({ text: 'Text2' })
  );

// Page to Object.
const obj = page.toObject();

// Build the page from JSON.
const pageFromJSON = new MkPages(JSON.stringify(obj));
pageFromJSON.addComponents(new MPText({ text: 'Added Text' }));

const changedObj = pageFromJSON.toObject();

// Post the page to Misskey.
const body = {
  ...changedObj,
  i: 'APIKEY',
};
fetch('https://misskey.io/api/pages/create', {
  method: 'post',
  body: JSON.stringify(body),
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
get eyeCatchingImageId(): string | null;
get font(): Fonts;
get alignCenter(): boolean;
get hideTitleWhenPinned(): boolean;
// The methods below can be chained.
setUrlName(value: string);
setTitle(value: string);
setSummary(value: string);
setContent(value: Component[]);
setEyeCatchingImageId(value: string);
setFont(value: Fonts);
setAlignCenter(value: boolean);
setHideTitleWhenPinned(value: boolean);
addComponents(...component: Component[]);
removeComponent(index: number);
```

### Components

#### MPImage

```typescript
new MPImage({
  fileId: string,
});
```

#### MPNote

```typescript
new MPNote({
  note: string,
  detailed: boolean,
});
```


#### MPSection

```typescript
new MPSection({
  title: string,
  children: Component[],
});
```

#### MPText

```typescript
new MPText({
  text: string,
});
```

### Environment Variables

```javascript
const MPEnvVars = {
  ai: '{AI}',
  url: '{URL}',
  version: '{VERSION}',
  login: '{LOGIN}',
  name: '{NAME}',
  username: '{USERNAME}',
  userid: '{USERID}',
  notesCount: '{NOTES_COUNT}',
  followersCount: '{FOLLOWERS_COUNT}',
  followingCount: '{FOLLOWING_COUNT}',
  isCat: '{IS_CAT}',
  seed: '{SEED}',
  ymd: '{YMD}',
  aiScriptDisabled: '{AISCRIPT_DISABLED}',
  null: '{NULL}',
}
```
