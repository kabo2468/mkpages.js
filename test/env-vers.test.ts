import { MPEnvVars } from '../src';

test('Environment variables', () => {
    expect(MPEnvVars).toEqual({
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
    });
});
