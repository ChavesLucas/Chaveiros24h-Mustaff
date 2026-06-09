import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NicheLandingPage from "./pages/NicheLandingPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Landing Pages Individuais dos Nichos */}
      <Route path="/chaveiro-24h">
        {() => <NicheLandingPage nicheId="chaveiro-24h" />}
      </Route>
      <Route path="/eletricista-hidraulica">
        {() => <NicheLandingPage nicheId="eletricista-hidraulica" />}
      </Route>
      <Route path="/encanador-24h">
        {() => <NicheLandingPage nicheId="encanador-24h" />}
      </Route>
      <Route path="/assistencia-veicular">
        {() => <NicheLandingPage nicheId="assistencia-veicular" />}
      </Route>
      <Route path="/marido-de-aluguel">
        {() => <NicheLandingPage nicheId="marido-de-aluguel" />}
      </Route>
      <Route path="/desbloqueio-conta-bancaria">
        {() => <NicheLandingPage nicheId="desbloqueio-conta-bancaria" />}
      </Route>
      <Route path="/reformas-alvenaria">
        {() => <NicheLandingPage nicheId="reformas-alvenaria" />}
      </Route>

      {/* Redirecionamento de compatibilidade de caminhos legados se necessário */}
      <Route path="/lp1-marido-de-aluguel.html">
        {() => <NicheLandingPage nicheId="marido-de-aluguel" />}
      </Route>
      <Route path="/lp2-eletricista-hidraulica.html">
        {() => <NicheLandingPage nicheId="eletricista-hidraulica" />}
      </Route>
      <Route path="/lp3-reformas-alvenaria.html">
        {() => <NicheLandingPage nicheId="reformas-alvenaria" />}
      </Route>
      <Route path="/lp4-chaveiro-24h.html">
        {() => <NicheLandingPage nicheId="chaveiro-24h" />}
      </Route>

      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
