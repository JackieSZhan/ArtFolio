#!/bin/bash

PORTFOLIO_ID=3
CATEGORY="Printmaking"
BASE_URL="https://artfolio-assets.sfo3.cdn.digitaloceanspaces.com/Printmaking"

FILES=(
  "Huan%20ZHAO_Dacia%20Gallery_18_Printmaking.jpg"
  "Huan%20ZHAO_Dacia%20Gallery_23_Printmaking.jpg"
  "Huan%20ZHAO_Dacia%20Gallery_25_Printmaking.jpg"
  "Huan%20ZHAO_Dacia%20Gallery_Unnamed_00_Printmaking.jpg"
  "Huan%20ZHAO_Dacia%20Gallery_Unnamed_01_Printmaking.jpg"
  "Huan%20ZHAO_Dacia%20Gallery_Unnamed_02_Printmaking.jpg"
)

TITLES=(
  "Dacia Gallery 18"
  "Dacia Gallery 23"
  "Dacia Gallery 25"
  "Untitled 1"
  "Untitled 2"
  "Untitled 3"
)

for i in "${!FILES[@]}"; do
  TITLE="${TITLES[$i]}"
  FILE="${FILES[$i]}"
  ORDER=$((i + 1))

  # Step 1: create the Project, capture the returned id
  PROJECT_RESPONSE=$(curl -s -X POST http://localhost:8080/api/projects \
    -H "Content-Type: application/json" \
    -d "{\"title\":\"${TITLE}\",\"category\":\"${CATEGORY}\",\"description\":\"\",\"displayOrder\":${ORDER},\"portfolioId\":${PORTFOLIO_ID}}")

  PROJECT_ID=$(echo "$PROJECT_RESPONSE" | grep -o '"id":[0-9]*' | grep -o '[0-9]*')

  echo "Created project: $TITLE (id=$PROJECT_ID)"

  # Step 2: create the Asset, linking it to that Project
  IMAGE_URL="${BASE_URL}/${FILE}"
  curl -s -X POST http://localhost:8080/api/assets \
    -H "Content-Type: application/json" \
    -d "{\"imageUrl\":\"${IMAGE_URL}\",\"caption\":\"\",\"sortOrder\":1,\"projectId\":${PROJECT_ID}}" > /dev/null

  echo "  -> linked image to project $PROJECT_ID"
done

echo "Done seeding Printmaking projects."
