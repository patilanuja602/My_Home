// Builds a downloadable .ics file for the ceremony so guests can add it to
// any calendar app without depending on a particular provider being open.

const EVENT = {
  title: "House Warming Ceremony — Suvarna Nivasa",
  description:
    "You are cordially invited to the House Warming Ceremony of Suvarna Nivasa.",
  location: "Beside NKMV Highschool, Morabagi, TQ. Jath, Dist: Sangli",
  // 21 Aug 2026, 9:00 AM IST -> stored as a floating local time in the ICS.
  start: "20260821T090000",
  // No end time was supplied on the invitation; default to a 3 hour window,
  // which is a sensible ceremony length without inventing specific detail.
  end: "20260821T120000",
};

function foldLine(line) {
  return line;
}

export function downloadInviteICS() {
  const now =
    new Date()
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0] + "Z";

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Suvarna Nivasa//House Warming//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:suvarna-nivasa-housewarming-2026@invitation`,
    `DTSTAMP:${now}`,
    `DTSTART:${EVENT.start}`,
    `DTEND:${EVENT.end}`,
    foldLine(`SUMMARY:${EVENT.title}`),
    foldLine(`DESCRIPTION:${EVENT.description}`),
    foldLine(`LOCATION:${EVENT.location}`),
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "suvarna-nivasa-housewarming.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export const MAPS_QUERY = "Beside NKMV Highschool, Morabagi, TQ Jath, Dist Sangli, Maharashtra";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
