// CustomDocumentationComponent.ts | CustomDocumentationComponent.tsx
import React from 'react';
import './buttons';
import { Primary_Buttons } from './buttons.stories';

export const CustomDocumentationComponent: React.VFC<{}> = () => {
  return (
    <div>
      
      <div className="infoBlockPiece">
        <h2 className="h2">Buttons</h2>
        <p>
          FDS Design System includes several predefined button styles. As the
          buttons serve multi purposes, it's implicit to use the relevant tag. For
          example, use the <code>&lt;a&gt;</code> tag if the button contains a
          link. ( <code>&lt;a&gt;</code> works without JavaScript). The
          <code>&lt;button&gt;</code> tag should be used if the button performs an
          action that changes something on the page. (
          <code>&lt;button&gt;</code> always require JavaScript to function).
        </p>
        <div className="highlighted-block mb--3">
          <h5 className="text--primary">How to import button styles:</h5>
          <p>
            In order to use buttons in your project, import following path in your
            main styles:
          </p>
          <h6>
            @import
            'node_modules/@mobilelivenpm/fds-static-scss/src/scss/components/buttons'
          </h6>
        </div>
        <div className="highlighted-block mb--3">
          <h5 className="text--primary">How to customize button styles:</h5>
          <p>
            In order to customize buttons in your theme as per requirements,
            import following path in your theme-settings file:
          </p>
          <h6>
            @import 'node_modules/@mobilelivenpm/fds-static-scss/theme/buttons
          </h6>
        </div>
        <div className="highlighted-block mb--4">
          <pre style={{fontFamily: '"Montserrat"', fontSize: '12pt', marginTop: 0}}><span style={{color: '#808080'}}>&lt;!--/ Anchor Links--&gt;</span></pre>
          <a href="#" className="btn btn--primary">Link</a>
          <a href="#" className="btn btn--success">View</a>
          <pre style={{fontFamily: '"Montserrat"', fontSize: '12pt'}}><span style={{color: 'rgb(0,0,128)'}}>&lt;a </span><span style={{color: 'rgb(0,0,255)'}}>href</span><span style={{color: 'rgb(0,128,0)'}}>="#" </span><span style={{color: 'rgb(0,0,255)'}}>class</span><span style={{color: 'rgb(0,128,0)'}}>="btn btn--primary"</span><span style={{color: 'rgb(0,0,128)'}}>&gt;</span>Link<span style={{color: 'rgb(0,0,128)'}}>&lt;/a&gt;{"\n"}</span><span style={{color: 'rgb(0,0,128)'}}>{"\n"}</span><span style={{color: 'rgb(0,0,128)'}}>&lt;a </span><span style={{color: 'rgb(0,0,255)'}}>href</span><span style={{color: 'rgb(0,128,0)'}}>="#" </span><span style={{color: 'rgb(0,0,255)'}}>class</span><span style={{color: 'rgb(0,128,0)'}}>="btn btn--success"</span><span style={{color: 'rgb(0,0,128)'}}>&gt;</span>View<span style={{color: 'rgb(0,0,128)'}}>&lt;/a&gt;</span></pre>
          <pre style={{fontFamily: '"Montserrat"', fontSize: '12pt'}}><span style={{color: '#808080'}}>&lt;!--/ Buttons--&gt;</span></pre>
          <button type="button" className="btn btn--primary">Save</button>
          <button type="button" className="btn btn--success">Delete</button>
          <pre style={{fontFamily: '"Montserrat"', fontSize: '12pt', marginBottom: 0}}><span style={{color: 'rgb(0,0,128)'}}>&lt;button </span><span style={{color: 'rgb(0,0,255)'}}>type</span><span style={{color: 'rgb(0,128,0)'}}>="button" </span><span style={{color: 'rgb(0,0,255)'}}>class</span><span style={{color: 'rgb(0,128,0)'}}>="btn btn--primary"</span><span style={{color: 'rgb(0,0,128)'}}>&gt;</span>Save<span style={{color: 'rgb(0,0,128)'}}>&lt;/button&gt;{"\n"}</span><span style={{color: 'rgb(0,0,128)'}}>{"\n"}</span><span style={{color: 'rgb(0,0,128)'}}>&lt;button </span><span style={{color: 'rgb(0,0,255)'}}>type</span><span style={{color: 'rgb(0,128,0)'}}>="button" </span><span style={{color: 'rgb(0,0,255)'}}>class</span><span style={{color: 'rgb(0,128,0)'}}>="btn btn--success"</span><span style={{color: 'rgb(0,0,128)'}}>&gt;</span>Delete<span style={{color: 'rgb(0,0,128)'}}>&lt;/button&gt;</span></pre>
        </div>
        <p>
          When using button classes on <code>&lt;a&gt;</code> elements that are
          used to trigger in-page functionality (like collapsing content), rather
          than linking to new pages or sections within the current page, these
          links should be given a <code>role="button"</code> to appropriately
          convey their purpose to assistive technologies such as screen readers.
        </p>
        <div className="highlighted-block mb--4">
          <pre style={{boxSizing: 'border-box', fontFamily: 'Montserrat', fontSize: '12pt', marginTop: '0px', marginBottom: '0px', overflow: 'auto', display: 'block', color: 'rgb(33, 37, 41)', padding: '0px', backgroundColor: 'transparent', border: '0px', fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textAlign: 'left', textIndent: '0px', textTransform: 'none', widows: 2, wordSpacing: '0px', WebkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial'}}><code className="language-html" data-lang="html" style={{boxSizing: 'border-box', fontFamily: 'Montserrat', fontSize: '12pt', color: 'rgb(33, 37, 41)', overflowWrap: 'break-word', wordBreak: 'normal'}}><span className="nt" style={{boxSizing: 'border-box', color: 'rgb(47, 111, 159)'}}>&lt;a</span> <span className="na" style={{boxSizing: 'border-box', color: 'rgb(0, 110, 224)'}}>class=</span><span className="s" style={{boxSizing: 'border-box', color: 'rgb(215, 48, 56)'}}>"btn btn--primary"</span> <span className="na" style={{boxSizing: 'border-box', color: 'rgb(0, 110, 224)'}}>href=</span><span className="s" style={{boxSizing: 'border-box', color: 'rgb(215, 48, 56)'}}>"#"</span> <span className="na" style={{boxSizing: 'border-box', color: 'rgb(0, 110, 224)'}}>role=</span><span className="s" style={{boxSizing: 'border-box', color: 'rgb(215, 48, 56)'}}>"button"</span><span className="nt" style={{boxSizing: 'border-box', color: 'rgb(47, 111, 159)'}}>&gt;</span>Link<span className="nt" style={{boxSizing: 'border-box', color: 'rgb(47, 111, 159)'}}>&lt;/a&gt;</span></code></pre>
        </div>
        <h3 className="h3">Button Variants</h3>
        <p>Add classes for different button variants:</p>
        <div className="highlighted-block mb--4">
          <h4>Solid</h4>
          <div className="buttons-examples">
            <button type="button" className="btn btn--primary">Primary</button>
            <button type="button" className="btn btn--secondary">Secondary</button>
            <button type="button" className="btn btn--success">Success</button>
            <button type="button" className="btn btn--danger">Danger</button>
            <button type="button" className="btn btn--warning">Warning</button>
            <button type="button" className="btn btn--info">Info</button>
            <button type="button" className="btn btn--light">Light</button>
            <button type="button" className="btn btn--dark">Dark</button>
            <button type="button" className="btn btn--dark disabled">Disabled</button>
          </div>
        </div></div>
      <Primary_Buttons />
    </div>
  );
};