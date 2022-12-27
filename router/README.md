**Client Side Routing** :-
Browser requests a document from a web server, and evaluates CSS and Javascript assets, and renders the HTML sent from the server.When the user clicks a link, it starts the process all over again for a new page.

CSR allows app to update URL from a link click without making another request for another document from the server.Your app can immediately render some new UI and make data requests with `fetch` to update the page with new information.

This enables faster user experience because the browser doesn't need to request an entirely new document or re-evaluate CSS and JS assets for the next page.It also enables more dynamic user experiences with things like animation.

**Nested Routes** :-
General Idea of coupling segments of the URL to component hierarchy and data.

**Dynamic Segments** :- Segments of the URL can be dynamic placeholders that are parsed and provided to various apis.

**Ranked Route Matching** :- When Matching URLs to routes, React Router will rank the routes according the number of segments, static segments, dynamic segments,splates, etc. and pick the most specific match.

**Active Links** :- To Style the active link we use isActive.

**Realtive Links** :- Where we use Href,Link to,NavLink to can take relative paths, with enhanced behavious with nested routes.

**Date Loading** :- Because URL segments usually map to your app's persistent data,React Router Provides conventional data loading hooks to initiate data loading during a navigation. Combined with nested routes, all of the data for multiple layouts at a specifi URL can be loaded in parallel.

**Pending Navigation** :- When users navigate around the app, the data for the next page is loaded before the page is rendered. It's important to provide user feedback during this time  so the app doesn't feel it's unresponsive.

{navigation.state === "loading" && <GlobalSpinner />}

**Skeleton UI with <Suspense>** :- Instead of waiting for the data for the next page, you can `defer` data so the UI flips over to the next screen with placeholder UI immediately while the data loads.

loader={async ({ params }) => {
    // these are promises, but *not* awaited
    const comments = fake.getIssueComments(params.issueId);
    const history = fake.getIssueHistory(params.issueId);
    // the issue, however, *is* awaited
    const issue = await fake.getIssue(params.issueId);

    // defer enables suspense for the un-awaited promises
    return defer({ issue, comments, history });
  }}

  **Data Mutation** :- HTML forms are navoigation events, just like links. React Router supports HTML from workflows with client side routing.

  When a form is submitted, the normal browser naviagtion event is prevented and a `Request`, with a body containing the `FormData` of the submission, is created. This request is sent to the `<Route action` that matches the form's `<Form action`.

  **With Router** :- 
  #syntax 
  import {useLocation,usenaviagtion,useParams} from "react-router-dom";

  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component {...props} router={{location,navigate,params}}>
        )
    }
    return ComponentWithRouterProp;
  } 

**HOOKS**
1. UseAction :- Returned Value from the previous navigation's `action` result ot `undefined` if there was no submission.The most common use-case for this hook is form validation errors.If the from isn't right, you can return the errors and let the user try again:

