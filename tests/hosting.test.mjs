import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

const rules = readFileSync(new URL('../public/.htaccess', import.meta.url), 'utf8');
const redirect = rules.match(/RewriteCond %\{HTTPS\} !=on\s+RewriteRule (\S+) (\S+) \[R=(\d+),L\]/);

// Evaluate the configured Apache substitution without an external host.
function httpsRedirect(input) {
  assert.ok(redirect, 'The HTTPS condition must guard a permanent redirect.');
  const url = new URL(input);
  if (url.protocol === 'https:') return null;
  if (!new RegExp(redirect[1]).test(url.pathname.slice(1))) return null;
  return {
    status: Number(redirect[3]),
    location: redirect[2]
      .replace('%{HTTP_HOST}', url.host)
      .replace('%{REQUEST_URI}', url.pathname) + url.search,
  };
}

test('All HTTP accesses redirect to HTTPS, including robots, pages and query strings', () => {
  for (const path of ['/', '/robots.txt', '/mentions-legales', '/politique-de-confidentialite', '/assets/site.js', '/?source=google']) {
    assert.deepEqual(httpsRedirect(`http://cbleu.re${path}`), {
      status: 301,
      location: `https://cbleu.re${path}`,
    });
  }
  assert.ok(rules.indexOf('[R=301,L]') < rules.indexOf('RewriteCond %{REQUEST_FILENAME} !-f'), 'Redirect must run before the SPA fallback.');
});

test('HTTPS accesses do not redirect to themselves', () => {
  assert.equal(httpsRedirect('https://cbleu.re/robots.txt'), null);
});