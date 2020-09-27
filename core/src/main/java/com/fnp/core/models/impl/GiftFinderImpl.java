package com.fnp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.day.cq.wcm.api.Page;
import com.fnp.core.models.Categories;
import com.fnp.core.models.GiftFinder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {GiftFinder.class,
    ComponentExporter.class}, resourceType = GiftFinderImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class GiftFinderImpl implements GiftFinder {

  @ValueMapValue(
      name = "mainTitle",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String mainTitle;

  @ValueMapValue(
      name = "placeholder1",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String placeholder1;

  @ValueMapValue(
      name = "placeholder2",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String placeholder2;

  @ValueMapValue(
      name = "ctaLabel",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String ctaLabel;


  private static final Logger LOGGER = LoggerFactory.getLogger(GiftFinderImpl.class);
  static final String RESOURCE_TYPE = "fnp/components/giftFinder";

  @Override
  public String getExportedType() {
    return GiftFinderImpl.RESOURCE_TYPE;
  }


  @Override
  public String getTitle() {
    return this.mainTitle;
  }

  @Override
  public String getPlaceholderOne() {
    return this.placeholder1;
  }

  @Override
  public String getPlaceholderTwo() {
    return this.placeholder2;
  }

  @Override
  public String getCTALabel() {
    return this.ctaLabel;
  }


}
