import { Box, Button, Link, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const STORAGE_KEY = "dawexpol_marketing_consent_v1";

function applyGtagConsent(accepted: boolean) {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    ad_storage: accepted ? "granted" : "denied",
    ad_user_data: accepted ? "granted" : "denied",
    ad_personalization: accepted ? "granted" : "denied",
    analytics_storage: accepted ? "granted" : "denied",
    personalization_storage: accepted ? "granted" : "denied",
  });
}

const MarketingConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted") {
      applyGtagConsent(true);
      return;
    }
    if (stored === "rejected") {
      applyGtagConsent(false);
      return;
    }
    setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    applyGtagConsent(true);
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    applyGtagConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Paper
      elevation={8}
      component="aside"
      role="dialog"
      aria-label="Informacja o plikach cookies i marketingu"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.modal,
        borderRadius: 0,
        p: { xs: 2, sm: 2.5 },
        maxHeight: "45vh",
        overflow: "auto",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems={{ xs: "stretch", sm: "flex-end" }}
        justifyContent="space-between"
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="subtitle1" component="h2" fontWeight="bold" gutterBottom>
            Pliki cookies i dane w kampaniach reklamowych
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            Używamy plików cookies i podobnych technologii oraz przetwarzamy dane (np. identyfikatory
            urządzenia, adres IP, dane o interakcjach z reklamą) w celach analitycznych oraz
            marketingowych, w tym w ramach Google Ads — aby mierzyć skuteczność reklam i dopasowywać
            komunikaty. Zgoda obejmuje udostępnianie danych partnerom reklamowym zgodnie z{" "}
            <Link
              href="https://policies.google.com/technologies/partner-sites?hl=pl"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              zasadami Google
            </Link>
            . Możesz ją wycofać w ustawieniach przeglądarki lub później usuwając dane strony.
          </Typography>
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ flexShrink: 0 }}>
          <Button variant="outlined" color="inherit" onClick={handleReject} size="medium">
            Odrzuć marketing
          </Button>
          <Button variant="contained" color="primary" onClick={handleAccept} size="medium">
            Akceptuję
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default MarketingConsentBanner;
