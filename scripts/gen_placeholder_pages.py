#!/usr/bin/env python3
"""Generate simple static placeholder landing pages under public/ so the
Google Ads Final URLs return HTTP 200 (not a soft-404) on GitHub Pages.

Each URL gets a real file at public/<path>/index.html. Vite copies public/
verbatim into dist/, and GitHub Pages serves it with a 200 status — unlike
unknown SPA routes, which fall through to 404.html (HTTP 404, risky for ad
review). These are throwaway placeholders: replace with real pages later
(delete the file to hand the path back to the React SPA / VsCompetitor).

Pages preserve ad attribution (gclid/utm) into the .getdragonbot.com cookie
+ the signup CTA, mirroring src/lib/attribution.js, so early ad clicks that
land here still attribute on sign-up.

Run from repo root:  python3 scripts/gen_placeholder_pages.py
"""
import os

SIGNUP = "https://app.getdragonbot.com/sign-up"

# path -> (H1, gradient-fragment to highlight)  — keep the fragment verbatim inside H1
PAGES = {
    # C1 direct competitors
    "/vs/jarvio": ("DragonBot vs Jarvio", "Free"),
    "/vs/datadoe": ("DragonBot vs DataDoe", "Free"),
    "/vs/profasee": ("DragonBot vs Profasee", "Free"),
    "/vs/geenie": ("DragonBot vs Geenie", "Free"),
    "/vs/agentcentral": ("DragonBot vs AgentCentral", "Free"),
    "/vs/aakaar": ("DragonBot vs Aakaar AI", "Free"),
    "/vs/ai-operators": ("The free AI Amazon operator", "free"),
    "/vs/mcp-tools": ("Your Amazon account, connected to AI", "connected to AI"),
    # C2 generic-tool alternatives (flattened, no /alternatives)
    "/research-tools": ("A free alternative to Amazon research tools", "free"),
    "/analytics": ("A free alternative to Amazon analytics tools", "free"),
    "/ppc-tools": ("A free alternative to Amazon PPC tools", "free"),
    "/repricer": ("A free alternative to Amazon repricers", "free"),
    "/inventory": ("A free alternative to Amazon inventory tools", "free"),
    "/listing-tools": ("A free alternative to Amazon listing tools", "free"),
    "/feedback-tools": ("A free alternative to Amazon feedback tools", "free"),
    "/reimbursement": ("A free alternative to FBA reimbursement services", "free"),
    "/discontinued": ("Your Amazon tool shut down? DragonBot is free.", "free"),
    # C3 non-brand niches
    "/amazon-ppc": ("Amazon PPC, run by AI", "run by AI"),
    "/amazon-seller-software": ("The free AI Amazon seller software", "free"),
    "/amazon-inventory": ("AI Amazon inventory management", "AI"),
    "/amazon-listing-optimization": ("AI Amazon listing optimization", "AI"),
    "/amazon-listing-generator": ("A free Amazon listing generator", "free"),
    "/amazon-profit-analytics": ("Amazon profit analytics, free", "free"),
    "/amazon-fba-calculator": ("A free Amazon FBA calculator", "free"),
    "/ai-amazon-agent": ("An AI agent that runs your Amazon account", "runs your Amazon account"),
    "/amazon-mcp": ("Connect your Amazon account to AI", "AI"),
    "/amazon-repricer": ("A free Amazon repricer", "free"),
    "/amazon-review-automation": ("Automate Amazon review requests, free", "free"),
    "/amazon-reimbursement": ("Free Amazon FBA reimbursement", "Free"),
    "/amazon-product-research": ("Free Amazon product research", "Free"),
}

TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} — DragonBot</title>
<meta name="description" content="DragonBot connects to Seller Central and Amazon Ads and runs your account — PPC, inventory, listings, messages. Free forever.">
<meta name="robots" content="noindex">
<link rel="icon" href="/DragonBot-avatar.png">
<style>
  *{{margin:0;padding:0;box-sizing:border-box}}
  body{{background:#0F0F0F;color:#fff;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px}}
  .wrap{{max-width:660px}}
  img.logo{{height:56px;margin-bottom:32px}}
  h1{{font-size:clamp(32px,6vw,56px);font-weight:800;line-height:1.06;letter-spacing:-0.03em;margin-bottom:20px}}
  .grad{{background:linear-gradient(to right,#2F7D4F,#98CC65);-webkit-background-clip:text;background-clip:text;color:transparent}}
  p.sub{{font-size:19px;line-height:1.6;color:rgba(255,255,255,.7);margin-bottom:36px}}
  a.cta{{display:inline-block;background:#2F7D4F;color:#fff;text-decoration:none;font-weight:600;text-transform:uppercase;letter-spacing:.05em;padding:16px 34px;border-radius:10px;transition:transform .2s,background .2s}}
  a.cta:hover{{background:#256B42;transform:translateY(-2px)}}
  .foot{{margin-top:26px;font-size:13px;color:rgba(255,255,255,.4)}}
</style>
</head>
<body>
  <div class="wrap">
    <a href="/"><img class="logo" src="/DragonBot-logo.png" alt="DragonBot"></a>
    <h1>{h1_html}</h1>
    <p class="sub">Connects to Seller Central and Amazon Ads, then runs your account — PPC, inventory, listings, messages. <strong>Free forever.</strong></p>
    <a class="cta" id="cta" href="{signup}">Get started free</a>
    <div class="foot">No credit card. Connect in 2 minutes.</div>
  </div>
  <script>
  /* preserve ad attribution to the app — mirrors src/lib/attribution.js */
  (function(){{
    try{{
      var KEYS=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","fbclid","msclkid"];
      var p=new URLSearchParams(location.search),found={{}};
      KEYS.forEach(function(k){{var v=p.get(k);if(v)found[k]=v.slice(0,256);}});
      var name="dragonbot_attribution";
      var ex=document.cookie.match(new RegExp("(?:^|; )"+name+"=([^;]*)"));
      if(!ex&&Object.keys(found).length){{
        var sp=new URLSearchParams();for(var k in found)sp.set(k,found[k]);
        var a=[name+"="+encodeURIComponent(sp.toString()),"Domain=.getdragonbot.com","Path=/","Max-Age="+(30*24*60*60),"SameSite=Lax"];
        if(location.protocol==="https:")a.push("Secure");
        document.cookie=a.join("; ");
      }}
      var cta=document.getElementById("cta");
      var carry=ex?decodeURIComponent(ex[1]):new URLSearchParams(found).toString();
      if(cta&&carry){{var u=new URL(cta.href);new URLSearchParams(carry).forEach(function(v,k){{if(!u.searchParams.has(k))u.searchParams.set(k,v);}});cta.href=u.toString();}}
    }}catch(e){{}}
  }})();
  </script>
</body>
</html>
"""


def h1_html(title, frag):
    if frag and frag in title:
        return title.replace(frag, '<span class="grad">' + frag + "</span>", 1)
    return title


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_base = os.path.join(root, "public")
    n = 0
    for path, (title, frag) in PAGES.items():
        d = os.path.join(out_base, path.strip("/"))
        os.makedirs(d, exist_ok=True)
        html = TEMPLATE.format(title=title, h1_html=h1_html(title, frag), signup=SIGNUP)
        with open(os.path.join(d, "index.html"), "w", encoding="utf-8") as f:
            f.write(html)
        n += 1
    print(f"wrote {n} placeholder pages under public/")
    for path in PAGES:
        print(f"  {path}  ->  public/{path.strip('/')}/index.html")


if __name__ == "__main__":
    main()
