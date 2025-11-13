#!/bin/bash

###############################################################################
# Rollback Release Script
#
# This script helps rollback a release by:
# 1. Deleting the git tag locally and remotely
# 2. Reverting the release commit
# 3. Pushing the revert to GitHub
# 4. Deprecating the npm package version
#
# Usage: ./scripts/rollback-release.sh <version>
# Example: ./scripts/rollback-release.sh 1.2.3
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if version argument is provided
if [ -z "$1" ]; then
  echo -e "${RED}❌ Error: Version number required${NC}"
  echo "Usage: $0 <version>"
  echo "Example: $0 1.2.3"
  exit 1
fi

VERSION=$1
TAG="v$VERSION"

echo -e "${BLUE}🔄 Rolling back release $TAG${NC}"
echo ""

# Confirm with user
echo -e "${YELLOW}⚠️  This will:${NC}"
echo "  1. Delete tag $TAG locally and remotely"
echo "  2. Revert the release commit"
echo "  3. Push changes to GitHub"
echo "  4. Deprecate npm package frostpane@$VERSION"
echo ""
read -p "Are you sure you want to continue? (yes/no): " -r
echo ""

if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
  echo -e "${YELLOW}Rollback cancelled${NC}"
  exit 0
fi

# Step 1: Delete tag locally
echo -e "${BLUE}Step 1: Deleting tag locally...${NC}"
if git tag -d "$TAG" 2>/dev/null; then
  echo -e "${GREEN}✅ Tag deleted locally${NC}"
else
  echo -e "${YELLOW}⚠️  Tag not found locally (may already be deleted)${NC}"
fi

# Step 2: Delete tag remotely
echo -e "${BLUE}Step 2: Deleting tag remotely...${NC}"
if git push origin ":refs/tags/$TAG" 2>/dev/null; then
  echo -e "${GREEN}✅ Tag deleted remotely${NC}"
else
  echo -e "${YELLOW}⚠️  Tag not found remotely (may already be deleted)${NC}"
fi

# Step 3: Revert the release commit
echo -e "${BLUE}Step 3: Reverting release commit...${NC}"
if git revert HEAD --no-edit; then
  echo -e "${GREEN}✅ Release commit reverted${NC}"
else
  echo -e "${RED}❌ Failed to revert commit${NC}"
  echo "You may need to manually revert the commit"
  exit 1
fi

# Step 4: Push changes
echo -e "${BLUE}Step 4: Pushing changes to GitHub...${NC}"
if git push origin main; then
  echo -e "${GREEN}✅ Changes pushed to GitHub${NC}"
else
  echo -e "${RED}❌ Failed to push changes${NC}"
  exit 1
fi

# Step 5: Deprecate npm package
echo -e "${BLUE}Step 5: Deprecating npm package...${NC}"
echo -e "${YELLOW}⚠️  You need to manually run:${NC}"
echo ""
echo "  npm deprecate frostpane@$VERSION \"This version has been deprecated and rolled back\""
echo ""
echo -e "${YELLOW}Make sure you're logged in to npm first: npm login${NC}"
echo ""

# Step 6: Delete GitHub release (optional)
echo -e "${BLUE}Step 6: Delete GitHub release (optional)${NC}"
echo -e "${YELLOW}⚠️  To delete the GitHub release, run:${NC}"
echo ""
echo "  gh release delete $TAG --yes"
echo ""
echo "Or visit: https://github.com/cameronrye/frostpane/releases/tag/$TAG"
echo ""

echo -e "${GREEN}✅ Rollback complete!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. Deprecate the npm package (see command above)"
echo "  2. Delete the GitHub release (optional, see command above)"
echo "  3. Verify the repository state is correct"

